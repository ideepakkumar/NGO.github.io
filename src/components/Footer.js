const Footer = () => (
  <footer className="bg-green-800 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <div className="space-y-2">
        <p className="font-semibold text-lg">Shyam Narayan Seva Sansthan</p>
        <p className="text-sm">Registration No: 1300/2008-09 | A registered NGO under the Indian Society Registration Act, 21, 1860.</p>
        <p className="text-sm">Vill.+P.O. - Pagahiya Aima, Via - Hardi, P.S. + Block - Saraiya, Dist. - Muzaffarpur, Bihar - 843122</p>
        <p className="text-sm">Phone: 9431012313</p>
        <p className="text-sm font-medium">Donation Account: SBI | A/C - 43942139793 | IFSC - SBIN0018042</p>
        <p className="text-sm mt-4">© {new Date().getFullYear()} Shyam Narayan Seva Sansthan. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
