const Footer = () => {
  return (
    <footer className=" bg-gray-900 fixed-bottom">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl font-semibold text-gray-200">Tour Asia</h2>

                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <a href="#" className="mx-4 text-sm text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit">Home</a>

                        <a href="#" className="mx-4 text-sm text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit">About</a>

                        <a href="#" className="mx-4 text-sm text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit">Teams</a>

                        <a href="#" className="mx-4 text-sm text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit">Privacy</a>

                        <a href="#" className="mx-4 text-sm text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit">Cookies</a>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-200 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                    
                </div>
            </div>
        </footer>
  );
};

export default Footer;