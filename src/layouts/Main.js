const MainLayout = ({ children }) => {
  return (
    <>
      <header><h2>Header</h2></header>
      <main>{ children }</main>
      <footer><h2>Footer</h2></footer>
    </>
  );
}

export default MainLayout;