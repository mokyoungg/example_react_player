import { useState, useRef, useCallback, useEffect } from 'react';

const useDropZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [url, setUrl] = useState('');

  const dropZoneRef = useRef<HTMLDivElement>(null);
  const dragCount = useRef<number>(0);

  const handleDragIn = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dragCount.current += 1;
    setIsDragging(true);

    if (dragCount.current > 2) {
      dragCount.current -= 1;
    }
  }, []);

  const handleDropFile = useCallback((e: DragEvent) => {
    if (!e.dataTransfer) return;

    const targetFile = e.dataTransfer.files[0];

    const source = URL.createObjectURL(targetFile);
    setUrl(source);
  }, []);

  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dragCount.current -= 1;

    if (dragCount.current > 0) return;

    dragCount.current = 0;
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);

    handleDropFile(e);
    dragCount.current = 0;
  }, []);

  const initDragEvent = useCallback(() => {
    if (dropZoneRef.current === null) return;

    dropZoneRef.current.addEventListener('dragenter', handleDragIn);
    dropZoneRef.current.addEventListener('dragleave', handleDragOut);
    dropZoneRef.current.addEventListener('dragover', handleDragOver);
    dropZoneRef.current.addEventListener('drop', handleDrop);
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvent = useCallback(() => {
    if (dropZoneRef.current === null) return;

    dropZoneRef.current.removeEventListener('dragenter', handleDragIn);
    dropZoneRef.current.removeEventListener('dragleave', handleDragOut);
    dropZoneRef.current.removeEventListener('dragover', handleDragOver);
    dropZoneRef.current.removeEventListener('drop', handleDrop);
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvent();

    return () => resetDragEvent();
  }, [initDragEvent, resetDragEvent]);

  return {
    dropZoneRef,
    isDragging,
    url,
  };
};

export default useDropZone;
