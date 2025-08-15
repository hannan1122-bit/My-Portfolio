// app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-red-950 to-black text-white py-6 mt-10 border border-red-700 rounded-md">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Abdul Hannan Asif. All rights reserved.</p>
          <p>Connect with me: 
            <a href="www.linkedin.com/in/hannan-asif-041a82255" target="_blank" className="text-blue-400 ml-2">LinkedIn</a> | 
            <a href="https://github.com/hannan1122-bit" target="_blank" className="text-blue-400 ml-2">GitHub</a>
          </p>
        </div>
      </footer>
    );
  }