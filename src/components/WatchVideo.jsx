import { useRef } from 'react';
import { VIDEO_URL } from '../data/content';

/** Renders nothing until VIDEO_URL is set in data/content.js. */
export default function WatchVideo() {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);
  if (!VIDEO_URL) return null;

  return (
    <>
      <button type="button" className="btn btn-video" onClick={() => dialogRef.current?.showModal()}>
        ▶ Watch Video
      </button>
      <dialog
        ref={dialogRef}
        className="video-dialog"
        aria-label="Raja Narayanasamy introduction video"
        onClose={() => videoRef.current?.pause()}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      >
        <button type="button" aria-label="Close video" onClick={() => dialogRef.current?.close()}>✕</button>
        <video ref={videoRef} controls preload="none" playsInline>
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </dialog>
    </>
  );
}
