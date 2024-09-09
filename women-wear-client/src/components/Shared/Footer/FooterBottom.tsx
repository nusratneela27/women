const FooterBottom = () => {
  return (
    <div className=" bg-amber-950">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between text-white p-10 md:py-20 mx-auto container">
        <div className="space-y-2">
          <h1 className="font-thin text-gray-100 pb-3">TRENDING PRODUCTS</h1>
          <p>Winter cloth</p>
          <p>Summer cloth</p>
          <p>Vintage</p>
          <p>Stylist</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-thin text-gray-100 pb-3">HELP</h1>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Size Guides</p>
          <p>Material & Care</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-thin text-gray-100 pb-3">EXPLORE</h1>
          <p>Jewellery</p>
          <p>High Jewellery`</p>
          <p>Wedding & Engagement</p>
          <p>Provence and Peace</p>
          <p>The 4Cs</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-thin text-gray-100 pb-3">ABOUT US</h1>
          <p>About Us</p>
          <p>The Rewards Stack</p>
          <p>Sustainability</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-thin text-gray-100 pb-3">CONTACT US</h1>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>What's App</p>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="text-center text-white p-10">
        <p>Copyright © 2023 Renew Kooding, Inc </p>
      </div>
    </div>
  );
};

export default FooterBottom;
