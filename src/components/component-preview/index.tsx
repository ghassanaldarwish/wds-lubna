"use client";

import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

export default function ComponentPreview() {
  return (
    <Tabs defaultValue="account" className="w-full relative mb-20">
      <div className="flex items-center justify-between pb-3">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            className="relative flex gap-2 h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            value="account"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            className="relative flex gap-2 h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            value="password"
          >
            Password
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you are done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you will be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

// import * as React from "react";
// import  Registry  from "@/registry";

// import { cn } from "@wds-utils/cn";
// import { Icons } from "@wds-ui/icons";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@wds-ui/tabs";
// import { Button, buttonVariants } from "@wds-ui/button";
// import CopyButton from "./copy-button";

// import useFullscreenView from "../hooks/use-fullscreen-view";
// import { Cog } from "lucide-react";
// const CodeEditor = React.lazy(() => import("./code-editor"));

// export function ComponentPreview({
//   name,
//   className,
//   align = "center",
//   ...props
// }) {
//   const [showCode, setShowCode] = React.useState(false);
//   const { ref, toggle, fullscreen } = useFullscreenView();
//   const codeScreen = useFullscreenView();

//   const Preview = React.useMemo(() => {
//     const Component = Registry?.[name]?.component;
//     return <Component />;
//   }, [name]);
//   const code = React.useMemo(() => {
//     return Registry?.[name]?.code;
//   }, [name]);

//   const install = React.useMemo(() => {
//     return Registry?.[name]?.install;
//   }, [name]);

//   return (
//     <div
//       className={cn(
//         "group relative my-4 flex flex-col space-y-2 w-[96%] m-auto",
//         className
//       )}
//       {...props}
//     >
//       <Tabs defaultValue="preview" className="relative mb-20">
//         <div className="flex items-center justify-between pb-3">
//           <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
//             <TabsTrigger
//               title="Preview"
//               id={"preview"}
//               value="preview"
//               className="relative flex gap-2 h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//             >
//               <Icons.eye /> <p>Preview</p>
//             </TabsTrigger>
//             {install && (
//               <TabsTrigger
//                 title="Preview install"
//                 id={"preview-install"}
//                 value="install"
//                 className="relative h-9 flex gap-2 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//               >
//                 <Icons.download /> <p>Install</p>
//               </TabsTrigger>
//             )}
//             <TabsTrigger
//               title="Preview code"
//               id={"preview-code"}
//               value="code"
//               className="relative h-9 flex gap-2 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//             >
//               <Icons.code /> <p>Code</p>
//             </TabsTrigger>
//           </TabsList>
//         </div>

//         <TabsContent
//           value="preview"
//           className={cn("relative rounded-md animate-in fade-in duration-500", {
//             border: name !== "aspect-ratio",
//           })}
//         >
//           <div
//             ref={ref}
//             className={cn(
//               "preview flex min-h-96 w-full relative justify-center p-10  prose-img:m-0",
//               {
//                 "items-center": align === "center",
//                 "items-start": align === "start",
//                 "items-end": align === "end",
//               }
//             )}
//           >
//             <div
//               className={cn(
//                 buttonVariants({ size: "icon", variant: "outline" }),
//                 " hidden md:flex absolute top-1 right-1  gap-1 text-md font-bold justify-center items-center cursor-pointer"
//               )}
//               onClick={toggle}
//             >
//               {fullscreen ? (
//                 <Icons.shrink className="w-[26px] h-[26px]" />
//               ) : (
//                 <Icons.expand className="w-[20px] h-[20px] " />
//               )}
//             </div>
//             <React.Suspense
//               fallback={
//                 <div className="flex items-center text-sm text-muted-foreground">
//                   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                   Loading...
//                 </div>
//               }
//             >
//               {Preview}
//             </React.Suspense>
//           </div>
//         </TabsContent>
//         <TabsContent
//           value="code"
//           className="relative w-full animate-in fade-in duration-500"
//         >
//           <CopyButton value={code} />

//           {showCode ? (
//             <div
//               ref={codeScreen?.ref}
//               className="w-full h-[500px] relative  overflow-hidden rounded-md border"
//               onMouseLeave={() => setTimeout(() => setShowCode(false), 10000)}
//             >
//               <div
//                 className={cn(
//                   buttonVariants({ size: "icon", variant: "outline" }),
//                   "hidden md:flex absolute z-10 top-2  right-14  gap-1 text-md font-bold justify-center items-center cursor-pointer"
//                 )}
//                 onClick={codeScreen?.toggle}
//               >
//                 {codeScreen?.fullscreen ? (
//                   <Icons.shrink className="w-[26px] h-[26px]" />
//                 ) : (
//                   <Icons.expand className="w-[20px] h-[20px] " />
//                 )}
//               </div>
//               <React.Suspense
//                 fallback={
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                     Loading...
//                   </div>
//                 }
//               >
//                 <CodeEditor value={code} defaultLanguage="javascript" />
//               </React.Suspense>
//             </div>
//           ) : (
//             <div className="w-full h-96  overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
//               <div className="absolute top-1/4 left-1/2 z-10  transform -translate-x-1/2 -translate-y-1/2">
//                 <Button
//                   title="Preview  show more"
//                   id={"preview-show-more"}
//                   className="bg-background/90 "
//                   variant="outline"
//                   onClick={() => setShowCode(true)}
//                 >
//                   <Cog className="mr-2 h-5 w-5 " />
//                   show more
//                 </Button>
//               </div>
//               <div className=" h-full rounded-md border  w-full backdrop-blur-sm backdrop-opacity-20 bg-gradient-to-t from-background to-transparent  absolute top-0 left-0"></div>

//               <pre>
//                 <code>{code}</code>
//               </pre>
//             </div>
//           )}
//         </TabsContent>
//         {install && (
//           <TabsContent
//             value="install"
//             className="relative w-full animate-in fade-in duration-500"
//           >
//             <InstallTabs install={install} />
//           </TabsContent>
//         )}
//       </Tabs>
//     </div>
//   );
// }

// function InstallTabs({ install }) {
//   const [showCode, setShowCode] = React.useState(false);

//   const { ref, toggle, fullscreen } = useFullscreenView();

//   return (
//     <div>
//       <Tabs defaultValue="npm" className="relative mb-20 ">
//         <div className="flex items-center justify-between pb-3 w-fit  m-auto">
//           <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
//             <TabsTrigger
//               aria-label="Preview npm"
//               title="Preview  npm"
//               id={"preview-npm-"}
//               value="npm"
//               className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//             >
//               <>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 48 48"
//                   width="40px"
//                   height="40px"
//                 >
//                   <path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z" />
//                   <path
//                     fill="#fff"
//                     d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"
//                   />
//                   <span className="hidden">npm</span>
//                 </svg>
//               </>
//             </TabsTrigger>
//             <TabsTrigger
//               aria-label="Preview  yarn"
//               title="Preview  yarn"
//               id={"preview-yarn"}
//               value="yarn"
//               className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//             >
//               <>
//                 <svg
//                   width="30px"
//                   height="30px"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 128 128"
//                 >
//                   <path
//                     fill="#2c8ebb"
//                     d="M99.24,80.71C94.9,80.76,91.1,83,87.89,85c-6,3.71-9,3.47-9,3.47l-.1-.17c-.41-.67,1.92-6.68-.69-13.84-2.82-7.83-7.3-9.72-6.94-10.32,1.53-2.59,5.36-6.7,6.89-14.36.91-4.64.67-12.28-1.39-16.28-.38-.74-3.78,1.24-3.78,1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6,7.61-6,7.61a14,14,0,0,0-11.71,4.5,9.64,9.64,0,0,1-3.85,2.27c-.41.14-.91.12-2.15,3.47C43.2,50,48.34,55.74,48.34,55.74s-6.13,4.33-8.4,9.72a24.78,24.78,0,0,0-1.75,11.68s-4.36,3.78-4.64,7.68a12.87,12.87,0,0,0,1.77,7.83,1.94,1.94,0,0,0,2.63.91s-2.9,3.38-.19,4.81c2.47,1.29,6.63,2,8.83-.19,1.6-1.6,1.92-5.17,2.51-6.63.14-.34.62.57,1.08,1a10,10,0,0,0,1.36,1s-3.9,1.68-2.3,5.51c.53,1.27,2.42,2.08,5.51,2.06,1.15,0,13.76-.72,17.12-1.53a4.33,4.33,0,0,0,2.61-1.46,63,63,0,0,0,15.49-7c4.74-3.09,6.68-3.93,10.51-4.84C103.64,85.54,103.43,80.64,99.24,80.71Z"
//                   ></path>
//                   <path
//                     fill="#2c8ebb"
//                     d="M64,2a62,62,0,1,0,62,62A62,62,0,0,0,64,2Zm37.3,87.83c-3.35.81-4.91,1.44-9.41,4.36a67,67,0,0,1-15.56,7.18,8.71,8.71,0,0,1-3.64,1.77c-3.81.93-16.88,1.63-17.91,1.63h-.24c-4,0-6.27-1.24-7.49-2.54-3.4,1.7-7.8,1-11-.69a5.55,5.55,0,0,1-3-3.9,6,6,0,0,1,0-2.06,6.66,6.66,0,0,1-.79-1A16.38,16.38,0,0,1,30,84.52c.29-3.73,2.87-7.06,4.55-8.83A28.56,28.56,0,0,1,36.61,64a26.82,26.82,0,0,1,6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42,1.17-3.11,2.13-4.84,4.24-5.58h0a6.84,6.84,0,0,0,2.51-1.34A17.65,17.65,0,0,1,60.34,31c.19-.48.41-1,.65-1.46,1.6-3.4,3.3-5.31,5.29-6a4.88,4.88,0,0,1,4.4.5c.65.43,1.48,1,3.9,6a4.69,4.69,0,0,1,2.85-.1,3.81,3.81,0,0,1,2.39,1.94c2.47,4.74,2.8,13.19,1.72,18.62a33.8,33.8,0,0,1-5.84,13.31,25.73,25.73,0,0,1,5.77,9.43,25.42,25.42,0,0,1,1.41,10.41A28.7,28.7,0,0,0,86,81.91c3.06-1.89,7.68-4.74,13.19-4.81a6.62,6.62,0,0,1,7,5.7A6.35,6.35,0,0,1,101.3,89.83Z"
//                   ></path>
//                 </svg>
//                 <span className="hidden">yarn</span>
//               </>
//             </TabsTrigger>
//             <TabsTrigger
//               aria-label="Preview  pnpm"
//               title="Preview  pnpm"
//               id={"preview-pnpm"}
//               value="pnpm"
//               className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//             >
//               <>
//                 <svg
//                   width="30px"
//                   height="30px"
//                   viewBox="0 0 32 32"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g fill="#f9ad00">
//                     <path d="m30 10.75h-8.749v-8.75h8.749z" />
//                     <path d="m20.374 10.75h-8.75v-8.75h8.75z" />
//                     <path d="m10.749 10.75h-8.749v-8.75h8.749z" />
//                     <path d="m30 20.375h-8.749v-8.75h8.749z" />
//                   </g>
//                   <path d="m20.374 20.375h-8.75v-8.75h8.75z" fill="#4e4e4e" />
//                   <path d="m20.374 30h-8.75v-8.75h8.75z" fill="#4e4e4e" />
//                   <path d="m30 30h-8.749v-8.75h8.749z" fill="#4e4e4e" />
//                   <path d="m10.749 30h-8.749v-8.75h8.749z" fill="#4e4e4e" />
//                 </svg>
//                 <span className="hidden">pnpm</span>
//               </>
//             </TabsTrigger>
//             <TabsTrigger
//               aria-label="Preview  manually"
//               title="Preview  manually"
//               id={"preview-manually"}
//               value="manually"
//               className="relative flex gap-2 h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//             >
//               <svg
//                 className=" fill-foreground"
//                 enableBackground="new 0 0 40 40"
//                 viewBox="0 0 40 40"
//                 width="30px"
//                 height="30px"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="m27.383 9.585c-.393 0-.777.075-1.143.224-1.553.628-2.303 2.404-1.674 3.963.469 1.152 1.576 1.896 2.822 1.896.39 0 .771-.074 1.133-.221.756-.306 1.346-.886 1.662-1.635.318-.749.326-1.573.021-2.326-.466-1.155-1.577-1.901-2.821-1.901zm1.444 3.65c-.165.386-.47.686-.858.844-.187.074-.383.113-.58.113-.644 0-1.215-.383-1.454-.977-.325-.801.062-1.717.86-2.04.188-.076.387-.115.588-.115.642 0 1.214.385 1.456.978.155.387.151.812-.012 1.197z" />
//                 <path d="m14.458 21.109c-2.441 0-4.429 1.986-4.429 4.43 0 2.438 1.987 4.422 4.429 4.422 2.44 0 4.426-1.984 4.426-4.422 0-2.443-1.986-4.43-4.426-4.43zm0 7.377c-1.628 0-2.954-1.322-2.954-2.947 0-1.629 1.326-2.954 2.954-2.954s2.951 1.325 2.951 2.954c0 1.625-1.323 2.947-2.951 2.947z" />
//                 <path d="m23.614 23.695-1.813-.663c-.106-.313-.233-.618-.379-.916l.811-1.754c.193-.415.127-.909-.168-1.255-.355-.422-.752-.818-1.177-1.177-.212-.179-.482-.279-.762-.279-.167 0-.329.035-.482.102-.003.002-.007.004-.011.006l-1.754.813c-.294-.144-.6-.271-.913-.376l-.67-1.821c-.158-.425-.553-.724-1.005-.763-.549-.048-1.116-.048-1.664 0-.453.039-.848.338-1.008.767l-.665 1.813c-.311.107-.617.234-.915.38l-1.757-.813c-.003-.002-.006-.004-.009-.006-.154-.066-.316-.102-.483-.102-.281 0-.552.101-.763.28-.426.361-.821.757-1.173 1.172-.296.346-.363.838-.172 1.257l.813 1.754c-.144.294-.271.6-.377.914l-1.816.667c-.428.157-.729.553-.769 1.012-.043.55-.043 1.106 0 1.658.039.455.34.851.768 1.007l1.815.668c.106.312.233.617.379.913l-.814 1.763c-.188.409-.122.897.169 1.249.355.421.753.818 1.18 1.18.003.002.005.004.007.006.212.175.479.269.753.269.172 0 .344-.038.494-.109l1.75-.813c.294.146.601.272.917.38l.668 1.815c.16.433.557.732 1.012.765.279.023.558.036.827.036.27 0 .548-.013.828-.036.455-.032.852-.332 1.011-.767l.666-1.81c.31-.107.616-.236.914-.38l1.765.816c.152.067.314.102.482.102.272 0 .54-.094.751-.267.004-.002.008-.006.012-.01.424-.359.82-.755 1.174-1.172.299-.346.367-.842.172-1.257l-.811-1.757c.145-.298.271-.604.377-.917l1.815-.666c.429-.158.729-.554.769-1.009.044-.55.044-1.108-.001-1.664-.038-.452-.341-.847-.768-1.005zm-.688 2.359-1.977.729c-.221.082-.391.263-.455.489-.13.454-.312.896-.54 1.311-.114.205-.122.453-.023.667l.883 1.909c-.23.259-.478.505-.737.735l-1.91-.886c-.212-.098-.46-.088-.666.023-.42.232-.862.415-1.311.548-.226.063-.407.232-.488.453l-.722 1.969c-.354.023-.689.023-1.042 0l-.727-1.973c-.082-.221-.263-.39-.488-.455-.464-.133-.905-.317-1.309-.542-.207-.115-.455-.125-.669-.025l-1.908.884c-.262-.23-.508-.479-.735-.733l.883-1.913c.099-.214.089-.461-.025-.667-.23-.417-.413-.856-.542-1.308-.065-.226-.234-.41-.456-.49l-1.972-.725c-.02-.346-.02-.695 0-1.039l1.976-.727c.22-.08.388-.263.455-.487.133-.463.315-.903.541-1.311.114-.207.124-.455.025-.668l-.883-1.906c.228-.257.475-.503.737-.737l1.91.884c.213.1.461.09.667-.023.418-.232.858-.415 1.307-.543.227-.065.409-.234.49-.456l.723-1.973c.346-.021.696-.021 1.042 0l.727 1.977c.081.224.263.393.489.456.458.132.899.313 1.309.539.205.113.453.123.667.023l1.906-.884c.261.23.507.477.737.737l-.883 1.912c-.099.213-.09.461.024.666.229.415.412.855.543 1.311.064.225.234.407.455.487l1.973.723c.018.345.018.695-.001 1.039z" />
//                 <path d="m33.979 13.039c.013-.24.017-.483.004-.726l1.154-1.049c.315-.284.44-.734.313-1.147-.141-.455-.319-.895-.532-1.312-.19-.371-.569-.602-.981-.602-.016 0-.031 0-.039 0l-1.556.052c-.157-.179-.329-.352-.509-.517l.074-1.56c0-.006 0-.014.002-.021.008-.425-.229-.822-.594-1.009-.412-.217-.847-.401-1.302-.553-.109-.034-.225-.054-.341-.054-.303 0-.597.127-.807.35l-1.063 1.139c-.244-.015-.484-.017-.727-.005l-1.049-1.157c-.207-.23-.507-.362-.819-.362-.111 0-.221.017-.328.05-.447.14-.887.316-1.307.53-.385.193-.623.597-.605 1.021l.051 1.558c-.182.162-.354.331-.517.51l-1.559-.075c-.432-.021-.832.21-1.028.588-.218.413-.404.851-.553 1.301-.001.005-.003.011-.005.015-.123.405-.012.84.302 1.14l1.138 1.061c-.016.243-.018.487-.006.729l-1.158 1.049c-.314.29-.435.737-.311 1.138.067.223.145.441.238.672.094.23.19.44.292.64.188.377.566.609.987.609.012 0 .021 0 .037-.002l1.553-.052c.16.182.332.355.512.519l-.075 1.565c-.018.423.214.824.587 1.021.399.212.836.398 1.303.554.111.038.229.056.346.056.307 0 .601-.129.807-.354l1.062-1.134c.242.014.484.016.729.004l1.047 1.151c.21.232.51.364.82.364.109 0 .22-.015.325-.048.45-.14.892-.318 1.304-.528.385-.189.625-.592.611-1.027l-.052-1.552c.181-.16.354-.333.517-.512l1.559.075c.019.002.036.002.055.002.414 0 .786-.227.975-.59.217-.407.403-.843.553-1.299.133-.403.02-.854-.293-1.15zm-1.493-.95c.043.386.039.773-.008 1.15-.03.234.057.469.228.63l1.226 1.148c-.081.222-.172.435-.273.64l-1.675-.082c-.236-.01-.461.09-.608.272-.246.304-.525.578-.828.816-.185.145-.289.369-.281.605l.057 1.671c-.21.098-.427.187-.646.264l-1.129-1.245c-.141-.153-.34-.24-.545-.24-.027 0-.055 0-.08.004-.393.042-.781.038-1.154-.008-.232-.03-.469.056-.629.229l-1.146 1.224c-.225-.082-.438-.175-.643-.272l.081-1.677c.012-.236-.091-.461-.273-.609-.303-.246-.575-.522-.81-.822-.145-.188-.37-.292-.607-.286l-1.674.058c-.047-.104-.094-.209-.14-.322-.045-.109-.085-.218-.123-.323l1.243-1.129c.174-.158.264-.391.237-.623-.04-.38-.036-.772.009-1.162.028-.232-.057-.465-.229-.626l-1.225-1.145c.08-.22.17-.433.272-.641l1.68.079c.235.012.46-.09.608-.272.24-.296.52-.572.826-.816.184-.145.287-.367.279-.602l-.055-1.675c.211-.097.428-.185.646-.262l1.127 1.245c.159.173.39.261.622.238.384-.041.776-.039 1.164.008.232.026.466-.058.624-.23l1.144-1.222c.219.08.435.173.646.272l-.08 1.675c-.012.234.088.459.268.607.311.251.582.532.814.828.146.184.369.288.605.282l1.678-.056c.096.209.184.424.261.647l-1.245 1.129c-.174.159-.263.391-.239.626z" />
//               </svg>{" "}
//               <span>Manually</span>
//             </TabsTrigger>
//           </TabsList>
//         </div>

//         <TabsContent
//           value="npm"
//           className="relative w-full animate-in fade-in duration-500"
//         >
//           <CopyButton value={install?.npm} />
//           <div className="w-full h-40 rounded-md border  overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
//             <pre>
//               <code>{install?.npm}</code>
//             </pre>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="yarn"
//           className="relative w-full animate-in fade-in duration-500"
//         >
//           <CopyButton value={install?.yarn} />
//           <div className="w-full h-40 border rounded-md   overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
//             <pre>
//               <code>{install?.yarn}</code>
//             </pre>
//           </div>
//         </TabsContent>
//         <TabsContent
//           value="pnpm"
//           className="relative w-full animate-in fade-in duration-500"
//         >
//           <CopyButton value={install?.pnpm} />
//           <div className="w-full h-40 border rounded-md   overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
//             <pre>
//               <code>{install?.pnpm}</code>
//             </pre>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="manually"
//           className="relative w-full animate-in fade-in duration-500"
//         >
//           <CopyButton value={install?.manually} />
//           {showCode ? (
//             <div
//               ref={ref}
//               className="w-full h-[500px] relative  overflow-hidden rounded-md border"
//               onMouseLeave={() => setTimeout(() => setShowCode(false), 20000)}
//             >
//               <div
//                 className={cn(
//                   buttonVariants({ size: "icon", variant: "outline" }),
//                   "hidden md:flex absolute z-10 top-2  right-14  gap-1 text-md font-bold justify-center items-center cursor-pointer"
//                 )}
//                 onClick={toggle}
//               >
//                 {fullscreen ? (
//                   <Icons.shrink className="w-[26px] h-[26px]" />
//                 ) : (
//                   <Icons.expand className="w-[20px] h-[20px] " />
//                 )}
//               </div>
//               <React.Suspense
//                 fallback={
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                     Loading...
//                   </div>
//                 }
//               >
//                 <CodeEditor
//                   value={install?.manually}
//                   defaultLanguage="javascript"
//                 />
//               </React.Suspense>
//             </div>
//           ) : (
//             <div className="w-full h-96  overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
//               <div className="absolute top-1/4 left-1/2 z-10  transform -translate-x-1/2 -translate-y-1/2">
//                 <Button
//                   className="bg-background/90 "
//                   variant="outline"
//                   onClick={() => setShowCode(true)}
//                 >
//                   <Cog className="mr-2 h-5 w-5 " />
//                   show more
//                 </Button>
//               </div>
//               <div className="h-full rounded-md border w-full backdrop-blur-sm backdrop-opacity-20 bg-gradient-to-t from-background to-transparent  absolute top-0 left-0"></div>

//               <pre>
//                 <code>{install?.manually}</code>
//               </pre>
//             </div>
//           )}
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
