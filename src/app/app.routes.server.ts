import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'category/:name',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Provide the parameter values for prerendering
      return [
        { name: 'electronics' },
        { name: 'appliances' },
        { name: 'computers' },
      ];
    },
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Provide the parameter values for prerendering
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];