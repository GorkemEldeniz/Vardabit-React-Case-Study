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
          <div className="flex gap-7 py-4">
            <Outlet />
            <Cart />
          </div>
        </main>
      </QueryClientProvider>
    </Provider>
  );
};

export default Layout;
