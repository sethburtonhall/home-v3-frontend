import { Outlet } from 'remix';

import { Header, Footer } from '~/components';

export default function Index() {
  return (
    <div className="relative overflow-hidden bg-slate-300 from-slate-900 to-slate-800 dark:bg-gradient-to-r">
      <div className="container relative mx-auto flex min-h-screen w-full select-none flex-col lg:w-3/4">
        <Header />
        <main role="main" className="my-6 px-4 md:my-12 lg:my-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
