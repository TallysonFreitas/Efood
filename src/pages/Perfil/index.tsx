import Banner from '../../components/Banner'
import Header from '../../components/Header'
import BannerImg from '../../assets/images/dolce.png'

const Perfil = () => (
  <>
    <Header type="nav" />
    <Banner
      imagem={BannerImg}
      tag="Italiana"
      titulo="La Dolce Vita Trattoria"
    />
  </>
)

export default Perfil
