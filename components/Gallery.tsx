import { useEffect, useState } from 'react';

interface Image {
  id: string;
  url: string;
  name: string;
}

function Gallery() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch('/api/images')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="grid">
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.name} />
      ))}
    </div>
  );
}

export default Gallery;