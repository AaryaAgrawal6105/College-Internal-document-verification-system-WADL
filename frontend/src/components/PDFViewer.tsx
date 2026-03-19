import { useState, useCallback, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2, 
  Maximize2, Minimize2, Move, Download, Printer, 
  Search, ShieldCheck, AlertCircle, FileText
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { 
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger 
} from './ui/tooltip';

// Set worker to CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  url: string;
  onPageChange?: (page: number) => void;
  className?: string;
  onLoadSuccess?: (numPages: number) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, pageNum: number) => void;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: () => void;
  children?: React.ReactNode; // For overlays like signatures
  activePage?: number;
}

export default function PDFViewer({ 
  url, 
  onPageChange, 
  className, 
  onLoadSuccess,
  onClick,
  onMouseMove,
  onMouseUp,
  children,
  activePage = 1
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(activePage);
  const [scale, setScale] = useState<number>(1.0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageNumber(activePage);
  }, [activePage]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    onLoadSuccess?.(numPages);
  }

  const changePage = useCallback((offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPage = Math.min(Math.max(1, prevPageNumber + offset), numPages);
      onPageChange?.(newPage);
      return newPage;
    });
  }, [numPages, onPageChange]);

  const toggleFullScreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => setIsFullScreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex flex-col bg-muted/30 rounded-xl overflow-hidden shadow-card border border-border animate-in fade-in zoom-in-95 duration-500",
        isFullScreen && "fixed inset-0 z-50 rounded-none bg-background",
        className
      )}
    >
      {/* Premium Toolbar */}
      <div className="w-full bg-card/80 backdrop-blur-md border-b px-4 py-2.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-1.5">
          <div className="bg-primary/10 p-1.5 rounded-lg mr-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => changePage(-1)}
                  disabled={pageNumber <= 1}
                  className="h-9 w-9 hover:bg-muted"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Previous Page</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex items-center px-3 py-1 bg-muted/50 rounded-full text-xs font-semibold text-muted-foreground select-none">
            Page <span className="mx-1.5 text-foreground">{pageNumber}</span> of <span className="mx-1.5 text-foreground">{numPages || '—'}</span>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => changePage(1)}
                  disabled={pageNumber >= numPages}
                  className="h-9 w-9 hover:bg-muted"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Next Page</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="hidden sm:flex items-center gap-1 px-1.5 py-1 bg-muted/40 rounded-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setScale(s => Math.max(0.4, s - 0.1))}
            className="h-8 w-8 hover:bg-card"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <div className="text-[11px] font-bold w-12 text-center text-muted-foreground select-none">
            {Math.round(scale * 100)}%
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setScale(s => Math.min(2.5, s + 0.1))}
            className="h-8 w-8 hover:bg-card"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1.5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullScreen}
                  className="h-9 w-9 hover:bg-muted"
                >
                  {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{isFullScreen ? 'Exit Full Screen' : 'Full Screen'}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <div className="w-px h-6 bg-border mx-1" />
          
          <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-muted text-muted-foreground">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* PDF Viewport */}
      <div 
        className={cn(
          "flex-1 overflow-auto bg-muted/10 custom-scrollbar flex justify-center py-8 px-4 sm:px-12 relative",
          "selection:bg-primary/20"
        )}
      >
        <div 
          className="relative inline-block transition-transform duration-300 ease-out"
          onClick={(e) => onClick?.(e, pageNumber)}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center p-20 min-h-[500px] w-full bg-background rounded-lg shadow-sm border border-dashed animate-pulse">
                <Loader2 className="h-10 w-10 animate-spin text-primary/30" />
                <p className="mt-4 text-sm text-muted-foreground/60 font-medium tracking-wide">PREPARING DOCUMENT...</p>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center p-12 min-h-[400px] w-full bg-destructive/5 rounded-xl border border-destructive/20 text-destructive text-center">
                <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="text-destructive font-semibold">Load Failed</h3>
                <p className="text-sm mt-1 opacity-80 max-w-[200px]">We couldn't retrieve the document from secure storage.</p>
                <Button variant="outline" size="sm" className="mt-4 border-destructive/30 hover:bg-destructive/10 text-destructive" onClick={() => window.location.reload()}>
                  Retry Connection
                </Button>
              </div>
            }
          >
            <div className="relative group">
              <Page 
                pageNumber={pageNumber} 
                scale={scale} 
                renderAnnotationLayer={false}
                renderTextLayer={false}
                className="shadow-2xl border-4 border-white/40 ring-1 ring-border rounded-sm bg-white overflow-hidden transition-all duration-300"
                loading={<div className="min-h-[600px] w-[500px]" />}
              />
              
              {/* Overlay Layer for Children (Signatures) */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {children}
              </div>

              {/* Page Number Badge (Bottom) */}
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm border px-2 py-1 rounded text-[10px] font-bold text-muted-foreground pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                PAGE {pageNumber}
              </div>
            </div>
          </Document>
          
          {/* Subtle Page curl effect / glass glare */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-50" />
        </div>
      </div>

      {/* Quick Access Sidebar / Minimap Placeholder */}
      <div className="flex items-center justify-center gap-4 bg-background/50 backdrop-blur-sm border-t px-4 py-2 cursor-default">
         <div className="flex gap-1.5">
           <div className="h-1.5 w-8 rounded-full bg-primary/40" />
           <div className="h-1.5 w-8 rounded-full bg-muted-foreground/20" />
           <div className="h-1.5 w-8 rounded-full bg-muted-foreground/20" />
         </div>
         <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">INTERNAL VERIFICATION SYSTEM</span>
      </div>
    </div>
  );
}
