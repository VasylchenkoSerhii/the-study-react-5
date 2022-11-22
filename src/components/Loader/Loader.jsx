import { TailSpin } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

export default function Loader() {
    return (
        <Overlay>
            <TailSpin
                height="80"
                width="80"
                color="#b938f4"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </Overlay>
    );
};
