import ThemeToggle from './theme-toggle';

const Header = () => {
    return (
        <header className="fixed z-50 flex items-center pl-4 w-[100vw] h-[50px] bg-slate-900">
            <div>
                <ThemeToggle/>
            </div>
        </header>
    );
};
  
export default Header;