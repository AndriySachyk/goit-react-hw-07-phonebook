
import { TailSpin } from  'react-loader-spinner'
import { BoxLoading } from './Loading-style'


const Loading = () => {
  return (
    <BoxLoading>
        <TailSpin
        height="50"
        width="50"
        color="#0bcb84"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </BoxLoading>
  )
}

export default Loading