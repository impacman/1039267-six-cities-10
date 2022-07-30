import MainScreen from '../../pages/main-screen/main-screen';
// import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
// import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
// import LoginScreen from '../../pages/login-screen/login-screen';
// import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
// import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen/property-not-logged-screen';
// import PropertyScreen from '../../pages/property-screen/property-screen';

type AppScreenProps = {
  cards: {
    id: number,
    premium: boolean,
    img: string,
    price: number,
    rating: number,
    name: string,
    type: string,
    bookmark: boolean
  }[],
};

function App({cards}: AppScreenProps): JSX.Element {
  return (
    <>
      <MainScreen cards={cards} />
      {/* <FavoritesEmptyScreen /> */}
      {/* <FavoritesScreen /> */}
      {/* <LoginScreen /> */}
      {/* <MainEmptyScreen /> */}
      {/* <PropertyNotLoggedScreen /> */}
      {/* <PropertyScreen /> */}
    </>
  );
}

export default App;
