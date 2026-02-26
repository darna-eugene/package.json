export const metadata = {
  title: "House of Aromas",
  description: "Luxury Scents That Transform Spaces"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "Georgia, serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}
