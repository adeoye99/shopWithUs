import { createHashRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import { MainLayout } from './Layout/main-layout';

  const router = createHashRouter([
    {
      path: "/",
      element: <MainLayout/>
      // children: [
      //   {
      //     index: true,
      //     element: <DashboardPage />,
      //   },
      //   {
      //     path: "provipay",
      //     element: <Navigate to="/" />,
      //   },
  
      //   {
      //     path: "single-transfer",
      //     children: [
      //       {
      //         path: "providus",
      //         element: <SingleTransferToProvidusPage />,
      //       },
      //       {
      //         path: "providus/:id",
      //         element: <SingleTransferToProvidusPage />,
      //       },
      //       {
      //         path: "others",
      //         element: <SingleTransferToOtherBanksPage />,
      //       },
      //       {
      //         path: "own",
      //         element: <SingleTransferToOwnAccount />,
      //       },
      //       {
      //         path: "others/:id",
      //         element: <SingleTransferToOtherBanksPage />,
      //       },
      //       {
      //         path: "pending",
      //         element: <PendingTransfersPage />,
      //       },
      //       {
      //         path: "transactions",
      //         element: <SingleTransctionsPage />,
      //       },
  
      //       {
      //         path: "complete/:type/:data",
      //         element: <TransferCompletedPage />,
      //       },
      //     ],
      //   },
      //   {
      //     path: "fx",
      //     children: [
      //       {
      //         path: "providus",
      //         element: <FXSingleTransferToProvidusPage />,
      //       },
  
      //       {
      //         path: "others",
      //         element: <FXSingleTransferToOtherBanksPage />,
      //       },
      //       {
      //         path: "own",
      //         element: <FXSingleTransferToOwnPage />,
      //       },
  
      //       {
      //         path: "pending",
      //         element: <FXPendingTransfersPage />,
      //       },
      //       // {
      //       //   path: "transactions",
      //       //   element: <SingleTransctionsPage />,
      //       // },
      //       {
      //         path: "complete/:type/:data",
      //         element: <TransferCompletedFxPage />,
      //       },
      //     ],
      //   },
      //   {
      //     path: "bulk-transfer",
      //     children: [
      //       {
      //         path: "providus",
      //         element: <BulkTransferPage />,
      //       },
      //       {
      //         path: "others",
      //         element: <BulkTransferPage />,
      //       },
      //       {
      //         path: "process/:id",
      //         element: <BulkTransferByIdPage />,
      //       },
      //       {
      //         path: "file/:fileId",
      //         element: <BulkFilePage />,
      //       },
      //       {
      //         path: "all",
      //         element: <AllBulk />,
      //       },
      //       {
      //         path: ":status",
      //         element: <BatchByStatusPage />,
      //       },
      //       {
      //         path: "uploads",
      //         element: <UserBulkTransferPage />,
      //       },
      //     ],
      //   },
  
       
    
  
        
       
       
      // ],
    },
   
  ]);
  
  const App = () => {
    return <RouterProvider router={router} />;
  };
  
  export default App;
