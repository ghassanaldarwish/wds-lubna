const MdxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose" data-mdx-content>
      {children}
    </div>
  );
};

export default MdxLayout;
