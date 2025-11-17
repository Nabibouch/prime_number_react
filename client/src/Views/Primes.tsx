import EnterInput from "@/components/EnterInput";
import usePrimiteStore from "@/Store/usePrimiteStore";
// import { Button } from "@/components/ui/button";




const Primes = () => {

    const number = usePrimiteStore((state) => state.number)
    const visible = usePrimiteStore((state) => state.visible)

    return (
        <>
            <div className='flex flex-col items-center'>
                <EnterInput />
                <span>{number}</span>
                {visible? "prime": "false"}
            </div>
        </>
    )
}

export default Primes;