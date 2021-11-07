export interface IGiphyDto {
  data: [
    { 
      id: string; 
      title: string; 
      images: { 
        preview_gif: { url: string },
        fixed_height_still: { url: string },
        downsized: { url: string },
        original: { url: string },
      } 
    }
  ];
}
