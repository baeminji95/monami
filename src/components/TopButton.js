export default function TopButton() {
    function toTop() {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <button onClick={toTop} className="fixed flex justify-center items-center bottom-7 right-5 z-50 ">
                <svg 
                className="w-12 fill-[#555]/50 hover:fill-[#C40F37]"
                xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z"/>
                    </svg>
        </button>
    )
}