import { Outlet, useNavigation } from "react-router";

export function Root() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>Loading</div>
      ) : (
        ""
      )}
      <Outlet />
    </>
  );
}
