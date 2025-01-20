/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    loader: "custom", // Usamos un cargador personalizado para compatibilidad con exportación estática
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  output: "export", // Asegura que Next.js exporte tu sitio como estático
  env: {
    nextImageExportOptimizer_imageFolderPath: "public", // Ruta de tu carpeta de imágenes
    nextImageExportOptimizer_exportFolderPath: "out", // Carpeta de salida para la exportación
    nextImageExportOptimizer_quality: "75", // Calidad de las imágenes exportadas
    nextImageExportOptimizer_storePicturesInWEBP: "true", // Convertir imágenes a WEBP
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer", // Subcarpeta para imágenes optimizadas
    nextImageExportOptimizer_generateAndUseBlurImages: "true", // Usar imágenes difuminadas para carga previa
    nextImageExportOptimizer_remoteImageCacheTTL: "0", // TTL para imágenes remotas
  },
};

module.exports = nextConfig;
