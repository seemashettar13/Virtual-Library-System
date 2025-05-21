

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-950 text-gray-800 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm text-white">© 2025 Online Library System. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy-policy" className="text-white hover:underline mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-white hover:underline mx-2">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;