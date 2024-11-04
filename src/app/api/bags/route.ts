import { NextResponse } from 'next/server';

type Bag = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export async function GET() {
  const bags: Bag[] = [
    { id: 3, name: "Gucci Dionysus Bag", price: 3500, imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUQEBAQEBUQEhAQEhAQFRcVEBASFRYXFhURFRYYHiogGBolGxcVITEhJSkrMS46Fx8/ODMsNygtLisBCgoKDg0OGBAQGy0lICYtLS0rLS0tLSsuLi0tLS0rLS0tLS0tLS0rLS0tLS0tKy0tLS0tLS0tLS0tLS03Ky0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECBAUHA//EAEgQAAIBAgMEBQYIDAUFAAAAAAABAgMRBBIhMUFRYQUGEyKRBxQyUnGSI0JTYmOBobEXM0NUcpOiwdHS4fAWNKTC0xVEgoOj/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEBAAEDAwMDBAIDAAAAAAAAAAECAxESE1EEISMUIjIxQZGhM2FScYH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtqVFFXk0kt7FOaaundPY0BcAAAAAAAAAAAAAAAADxxGKhC2d2vd/UrXb4JXR7AAAAAAAAAAAAKXNP1oxcqdJZW4tvauC3eLXgRynUTV2278zG5e0zjDptdPNynVlnda+k8TSxNFU4RrUpJz7OK7/AGkGvSlsStJNa7iIdBdesVQ7SjUwdWaeJahJxqZYQc2m20pNq2u5K+iJG1Et7vF+Jlv1cN46Sn7z+kp6K6bpV1JwzxUZ5F2sZU3LuqV4qSTa1+xmw7WPrLxRB7R4vxKqEeLJ9RPCJ6OOf0m7rR9aPii3ziHrx8UQzs48WXdnDiyd+eEekp/y/SY+cw9eHvIecw9eHvIhvZw4sKNPixvzwekp5n8Jl5zD14e8h5zD14e8iHWp8WLU+LG/PB6SnmfwmPnMPXh7yHnEPXh7yIguzDlTG/PCPSRzP4S/zmHrw95Ed6R64xptqnhcXXtn1jTlGPd5tXd3wRgOVL+2O0pf2yJvytHSU8z+GkrdYMZWxCqLCTp/ATpOM7xp5JN3ffSblbdyXE2WB6+1HGLrYedJurTpyh2dSb7y70VKOySScrWd0nbYZTr0uBAeuGIpU68qjq4jCqTp5qkGnTqxirumlJpKpF5ZLXVZtHumi7M1YVu2Kaacw7XhMZCpCM4yi1NKSs+JkHPui8UlQg3KU5W1qT0lPV95q+1rn9ZN+i6znRpzbu5Qi2+dtftNaK9UzDC5a0RE8soAGjEAAAAAQ/r7V9CPCMn70o/ysjVKu0tpt+v9RqstNFTpvThmqa8lu8CKRxyPOvz5Jex0keKG1linxLHimYHbp7y11DHU6cM/zxjz58TXuZY5jUnS2Xn74j/qD4mqcy3ORqlOmG1ePfEsePfE1kplmcZRiG2WNfEr56+JqlULoyGTDaLGviHjHxNepF1xkwzvO2V85ZgqRVTGTDO84ZoelsTUUpOliY0ZRlCUlVU+zilF5a8XBPWLbUlbZPat+w7Q1HScJTTXm9PFpVItUmk6kKjg1FvvRfZzV4yd7K0dHdW36efe5erjxpDRxDyrVO1tY+jfeo2S0+pexbDpHVSd8JB8JVl4VJo5PTqNtRjCS7tPuNSvTWSNozz95NaJ5ndb29p0vqFiVPCys7qNerH7pcX63Fm1mfJU5up/hoSQAHW4AAAAAByryuVK/nNJ4erklTpK60aeaUnqn+ivEgMem60f8xgoT4zw7dOXu6pnRvKFGXnLbTyqMNd1raPbxzLZ9ZEpKL4Hn3bmK5iYet09rNuJiWuw/TuFlp286EvVxMGl78bo2tLPJZoOFaPrUZKa+zUxanR9Ka70Yv2mDPqxSvmpSlSl61OTi/sM/HP9NsXKf7bft7OzTT4PRlyrI1fY4+Csq8MRFbIYmKls+ctftLH0nKP+YwVSnxqYaWePtyS2LkvsG1n6SndmPlDcZilzAw/SFCelLEQb+Tqp06nss9p7zco+lFpbL/Ff1rQpNEx9V4uUy9ZSPelgK0tVB62tfS99niYNXpaOHanKDfcupNaRclFxcVdZnZuyTvrfcjTYnrRiJ+h2zjeT3Qvm9JZY37rVk4tvZtR0U2IxmqXJX1U5xRCTVsLUgrzhJLZfd7G1sLIM1OB65VFHsqqnLMrNVmrPSyiqiV4K26zWzVbTZ1K0dJxUoqfxWrNS3q33FbljEZpXs9TqnTXGJZFw5oxMTiowV6tSnRX0krP3Vrf+Jq59YqN7UoVsS/mxyU78G3rbmjGLdUuibtMN26yRc81r2yrbeTUVv119jI757jp/i6dLCrilmqe8/ZwPJ9Xp1HfEVqlV7e83a/Jbi+3EfWWc3ap+MNri+nsLT0lXVRr4tBOV+WbYvrMD/qdGtSlOTqYSPaTSqNwlKrBQh2tPLJZHNZoSjrm9LLtZ60egacPir2l9GnOMJRoum328Pg6rywpzcbUq92nFq+aDjo2pKzWptZ0xV2c3URXNHuljdK0sVOq6TrNUoxo2VO0Y1E6cG6lot+lttdpX0ude8lVPJhJU1uqKXjCMeC3wf9TnkIRzegqfdh8GsrUHkjeCcO60ndLLpZK2h0byb+hUVrK1J7LbXU5Ldbjt2l7dUzdmFL1uIsRP+kzAB1vPAAAAAHMvLDjJwnh+zk4Ps8RLNF2fpUkv38dr9py6fTmJ+Xn+y+HFcl4I6X5XrOtTj6tFv6pzf8hzN4U47tXuejYpzRC1dP4pbKz9ynutb4vJeCC6xYv5bZb8nT3W+byXgivmpVYRGWuG2iVY9ZMWvyq/VUuXzeS8C7/E2K3zg/bSpfylFhkV825DWaJY2J6UqVFapChP9KjT/cuZb0Xipqqo53Sg1JSjH8Xaz+Lste2wy/NkUoU7VE1HNpPu66qzvs1ulrpwNKK8zEMrtGKZl6YTBdrUdSV5RjJxg5X3Wd0nsVmrLkblYaK0sYPQqlGFRyhb4ZpStsagrwXBJp7OBsHVMb8zrl0dNTTtwxsZgYSi00thplVlSpVYRlKE4K0XDhxzextW4tc7SFVfr5LazSY5Sz1+7bvyUr95wbS333t2/wDHTW5p00z3ZdXEdphp8NicrzOjQqS071WLnJ7NrcuX38WbWl1jqxVo0sKv/V7Pncvv4sxoYZW2F/my4Ca8opowyv8AFNf1MN+q/qH1qr+ph/1S58+b+zgrYjwpY8KRmF8VMyXWuv8AJ4b9V/UyMNiO3oOpXpZvh5U0sMqkZVE6cXPDS7O7tNJNXVm6Tu1v088KbToWm1h6tu4+0u5uKl8GopycI5ot1INRmrPW70e7S3MZ7ML0Tp7snH9PzhVy03QrxcKLjVqQzVZJ04WdR6d/TXRb9NWdX8lGJlPC1ZTd5dutiSsnRpNJJbFe+hx/pqhJ4hymoZnCk3Kn6FW8F8KtX6W3adY8kWlCsvn0pfsKP+0vRPkwzux4oT8AHS4wAAAAByryoSvi7erRor9qq+PPh4b4P2ZNPKNO+MmuCpx/YT/3ESseben3y9jp48cPDsx2Z72DiZN3hkGU9nEtyloRLxkjFnZSTd7Jq9tq5rmZ0kYWIiXpnEsrkZjC6mnCOazyVJJQla2bInGTavxW9bLGTGrctzQyTW1LJmpRS1WWMs7ad86WW9lqlfVqz8MFrE1vUd8ufprnbS9MRXsuJhVou8s11Jz1irZUpLOrtN95J5bcvHKp/jcttXF2lupp6Ob2bE3bXVte1W4tpu6u7SmlOSSnLXXNba9jvz032m3TpomUXa9VyKeFKcD0UCtJHsomDriHjkLXTMnKW5SFsMWrT0MnoenelVjljUtOE3TqW7OLSlkrPMnFqLupJ20ltWqdlSJkdB7KsXGbXclelm7WL70brI1Jxd8skr+le2l1rZ+Tn6iPY8MTQtUt2PYWjTvRumoSyRuotK2W+zlY6h5JZdytHhGg/GVb+BzCWW6yqqkoU0o1r9pTtFLs3fXu7NeCOl+SaXerLjSoPwnX/m5fvdrc+WWd6PBH/HRQAdrzgAAAAByHr6742r+lFeFGkRlkn67Un55Wuvjp/U6VO27k9+5/XHHA8y785e1Y/jpWFC/KUcSjVaWl1g0EPKRh4hGbMw67LQpUdHyvGSbtaUNbLvJ2i03tXdVrq9tNDKwtGyfte+9lfTXeaqliVCWuyWkuK4Nez+Ju6CWVNNOL2SWqf9eRrXVM04YW6aYrmXhGlFTcm7ejqvStqmlF6Pc77spgV7urJbMrypWt9m7wWwzsZVUO87X+LHe3a6duGqfM19Hjx1GqdODRTrmpl00e6R5Uz2SMnTAymUvRUDwqRHRNRQqybm6XdT7Wyap95Lvpp3g767lt0tdek0WYGooVk86hdSiptXgm/XW+P96WutLfyhje70StlNOWlWVZJRiqsvSkoxS147LX32Oi+SuXwtRX/JW8J34/O5HOsdUaqzlOUJXcW50taKzJNQUtmitv1JL1QxOJzN4LK5xozbU/RcZVKcdNVrpJrVeiXoiYusrkxNh2kEGqdP4+jdVKPaKNo9o07S+e8sba8NEtNdxsuj+tLk456ek5OKcWs6eXMrwvqnG7umdmXnYScFEwShUAAafprq/RxDUqilGaWVVKbtLLe9no1JX11TsaGfUCje/nGJXK1B/fSJq0UylJopn6w0puVR2iUJ/B9R/OcV4Yf/hK/g+o/nOK/wBPz+h5smuQpkI26eE71fKF/g+ofnGK/wBPz+h5sq/J/Q/OMVrf5Dn9DzZNMgyjbp4N6vlCKnk9oP8A7jFb/kef0XN+JhYjyaUpbMTiv/jz+i5s6HlGQnbp4N2vlyjFeSSMtmLrr2qk+PCC4sx6PkfqQd6fSVaF9ypxtx3Ox1/IVyk6YV3KnIKfkfaeaeOrTfHJC/7SZs8L5Lqa24mv7tD99PkdLyDIRNESmLtUfdA6fk4or8vX92hy+j5ffxPT8HlH5et7lH/jJzkGQjbp4TvV8oN+D6l8vV9yjz+Zzf2cEUfk+p7q8/rp0v5SdZBlG3Twner5QCfk6i9mJf6qH8eRg1vJlPMp08WlKLUot0lo1se06bkGUbdPCJvVz93O59TcU8im8NJUqkayjSgqeepFxac730eVJ8T3wXVPFU23TVGi6zbrSpzd1H5OF09Hvk9dtkr6T6xUthTVKGUuq+JcpTnUp3qSg3aTapxi01Gn3E1e0bu+7Sxs8J1cad6la+t7Qhl0tlUU23ZKLa0ttfFkgBOEZUSBUEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z" },
    { id: 4, name: "Louis Vuitton Neverfull MM", price: 1500, imageUrl: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm--N40598_PM2_Front%20view.jpg" },
    { id: 5, name: "Chanel Classic Flap Bag", price: 8000, imageUrl: "https://cdn-images.farfetch-contents.com/18/90/80/43/18908043_41281877_600.jpg" },
    { id: 6, name: "Hermès Birkin Bag", price: 15000, imageUrl: "https://sothebys-com.brightspotcdn.com/dims4/default/f4a23dd/2147483647/strip/true/crop/2000x1999+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fb4%2F54%2F6495129d4be9a5e99e9ee9d18ebd%2Fbirkin-20.jpg" },
    { id: 7, name: "Prada Re-Edition 2000 Bag", price: 2000, imageUrl: "https://cdn-images.farfetch-contents.com/18/58/34/53/18583453_40697383_1000.jpg" },
    { id: 8, name: "Dior Saddle Bag", price: 3000, imageUrl: "https://assets.christiandior.com/is/image/diorprod/M0455CBAAM44M_E01?$default_GHC$&crop=305,111,1300,1859&bfc=on&qlt=85" },
    { id: 9, name: "Fendi Baguette Bag", price: 2500, imageUrl: "https://static.fendi.com/dam/is/image/fendi/8BR600A72VF15ZW_01?wid=1000&hei=1000&hash=78c5845684504b7a51390a6f61ace1f9-1820279ffb0" },
    { id: 10, name: "Celine Triomphe Bag", price: 2000, imageUrl: "https://twicpics.celine.com/product-prd/images/large/187363BF4.38NO_1_SS24_P1_W_V4.jpg" },
    { id: 11, name: "Balenciaga Hourglass Bag", price: 2500, imageUrl: "https://cdn-images.farfetch-contents.com/15/21/68/72/15216872_54376283_600.jpg" },
    { id: 12, name: "Bottega Veneta Jodie Bag", price: 3000, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HoPTW_qhNozwccmmcsujD8MuXE0ErMmAtg&s" },
    { id: 13, name: "wwww new",price:5656, imageUrl: "nnn"}
   ];
  return NextResponse.json(bags);
}
