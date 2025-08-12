const placeholderImageUrl = '/your-image.png'; // Make sure to replace this

const ImageCarousel = () => (
    // Added 'relative' and 'overflow-hidden' to contain the gradient
    <div className="hidden lg:flex relative overflow-hidden flex-col items-center justify-center w-1/2 p-8 rounded-lg">
        {/* The decorative background element */}
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 to-transparent rounded-full"></div>
        
        {/* All content is 'relative' to appear on top of the background */}
        <div className="relative z-10 flex flex-col items-center">
            <img src={placeholderImageUrl} alt="Travel and expense management" className="max-w-md rounded-lg shadow-xl" />
            <div className="text-center mt-8">
                <h3 className="font-bold text-gray-800">Your one-stop shop</h3>
                <p className="text-gray-600 mt-2">From booking to bookkeeping—give your company one place to manage travel and expense.</p>
            </div>
            <div className="flex gap-2 mt-4">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    </div>
);

export default ImageCarousel;