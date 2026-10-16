import type { MetadataRoute } from 'next';
import { rooms } from '@/data/rooms';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: '', priority: 1.0 },
    { path: '/rooms-suites', priority: 0.8 },
    { path: '/restaurant-caf', priority: 0.8 },
    { path: '/booking', priority: 0.8 },
    { path: '/contact', priority: 0.5 },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    priority: r.priority,
  }));

  rooms.forEach((room) => {
    entries.push({
      url: `${base}/room-detail?slug=${room.slug}`,
      lastModified: new Date(),
      priority: 0.5,
    });
  });

  return entries;
}