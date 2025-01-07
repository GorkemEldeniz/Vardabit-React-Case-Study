import Cart from "@/components/cart";
import Header from "@/components/header";
import { store } from "@/libs/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Outlet } from "react-router";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <main className="max-w-screen-2xl mx-auto w-full h-screen">
          <Header />
          <div className="md:flex md:gap-7 py-4">
            <Outlet />
            <div className="hidden md:block relative ml-auto min-w-60">
              <Cart />
            </div>
          </div>
        </main>
      </QueryClientProvider>
    </Provider>
  );
};

export default Layout;
