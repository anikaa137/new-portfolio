import NavBar from "./components/NavBar/NavBar";
import { Scrollbars } from "react-custom-scrollbars";
import AnimatedCursor from "react-animated-cursor";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 10,
    backgroundColor: "#afb42b",

    width: 4,
    right: 1,

    // opacity: 1
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="0, 21, 31"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <div class="App-border ">
        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
          <Router>
            <NavBar />
            <div className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex ab
              facere quia earum consequatur odit ratione commodi pariatur
              officia? Necessitatibus ex delectus adipisci sunt explicabo natus
              qui ipsum quisquam! Iure similique eos, itaque quibusdam ea neque
              at excepturi ipsa numquam nisi asperiores natus. Quibusdam
              recusandae deserunt, reprehenderit illum quis deleniti vero fugiat
              expedita aliquid dolor, quaerat, consequatur optio porro! Illum
              qui magni sint, molestiae consectetur ducimus, totam ipsam maiores
              repudiandae doloremque omnis praesentium modi explicabo molestias
              velit mollitia, voluptatum pariatur architecto laborum incidunt
              corporis quam commodi nulla nesciunt. Magni. Nostrum assumenda
              odio quasi itaque consectetur quaerat, mollitia pariatur,
              explicabo velit totam voluptatibus, illo ipsa nobis ea expedita
              dicta vitae placeat soluta quod aspernatur delectus voluptatum.
              Veritatis doloribus fugiat deserunt. Totam fugiat officia
              assumenda excepturi ipsam quod vitae vero itaque natus beatae
              saepe, in voluptatibus laboriosam voluptas quidem eveniet cumque
              laudantium nihil odit. Veritatis, vero ipsa ad id sed consectetur?
              Impedit, optio a unde voluptatem nulla ad nihil ipsam officia
              obcaecati accusamus consectetur totam non error sunt earum labore
              quasi maiores commodi blanditiis voluptas! Molestiae totam
              corporis molestias dolorem nobis. Temporibus nemo quos doloribus
              aspernatur ad, quaerat illo repudiandae ducimus et laudantium?
              Cum, inventore iste. Nemo sit, repudiandae perferendis reiciendis
              exercitationem obcaecati, molestiae, distinctio illo ullam beatae
              excepturi accusamus impedit! Iste omnis nam rem facere
              perspiciatis maxime nulla rerum modi deleniti autem, ullam beatae
              possimus, ipsam, pariatur voluptatum harum consectetur ipsa
              mollitia quis aliquid vitae adipisci eveniet. Officiis, cumque
              ipsam? Tenetur vel cum quidem odit. Autem sapiente cumque,
              similique repellat ea earum harum praesentium doloribus, iste
              dolorem necessitatibus a magni ex obcaecati hic molestiae, tempora
              in qui ab sequi atque? Dolorum id asperiores est consequatur at
              magnam eligendi amet distinctio similique cumque, obcaecati fugiat
              voluptatem quisquam commodi, nam nemo neque quia ex repellat quo
              ut non placeat. Blanditiis, numquam ea. Placeat inventore harum
              dolorum minus autem ipsa quae architecto optio deleniti nam?
              Mollitia corrupti, dolore iste quos atque, corporis nam nostrum
              rerum amet impedit maiores consequatur neque sit fugiat
              recusandae. Fugiat nisi repudiandae amet at maiores mollitia eum
              illum et modi quod ad nihil eaque sed, fugit laborum nulla,
              voluptates molestiae maxime quisquam laboriosam atque nobis ut?
              Enim, quas fugiat! Voluptas, veritatis perspiciatis! Illo
              blanditiis, fugiat at provident assumenda consectetur saepe
              consequuntur. Blanditiis, fuga totam earum a molestiae aliquid
              nulla culpa! Dolore vel iure, quis obcaecati ab id. Dolorum,
              vitae! Eveniet corrupti sit neque minus impedit, aliquid sed,
              placeat laboriosam maiores voluptatibus praesentium enim quisquam
              voluptate cupiditate aspernatur earum iusto voluptas, omnis
              excepturi. Assumenda eum aliquid dicta beatae minima. Dicta!
              Officiis, doloremque velit enim nisi libero, tenetur autem ea sint
              repudiandae, iure modi provident earum labore facere? Alias
              exercitationem harum inventore aliquam quibusdam rem facere
              tenetur, beatae ratione illo minima! Deserunt optio rerum quisquam
              dolore accusamus ipsam ab autem, commodi placeat excepturi odio
              aspernatur, enim est explicabo! Maxime, reiciendis eligendi
              perferendis veniam necessitatibus harum cum, distinctio illum
              minus modi fugit. Facere quas quo suscipit tempora quibusdam
              perspiciatis neque inventore qui impedit aliquam, iusto eligendi
              odit cupiditate quasi nisi fugit, magnam, repellat dolore vel ut
              atque expedita. Quod nihil iste libero? Est assumenda quos
              accusamus, id voluptatum voluptates amet nostrum quod praesentium
              reiciendis illum esse ipsa, nesciunt, quasi nemo illo eos
              exercitationem inventore eligendi iste. Reiciendis cum iste unde
              assumenda aut. Omnis quam fuga a iste consequuntur reiciendis in
              voluptate aliquid rem voluptatem veniam vero, quae, facere magni
              tempora dolorum minima deserunt. Optio nesciunt consectetur id
              officia. Fugiat repudiandae sequi impedit. Nam, dolorum.
              Inventore, quasi sunt facilis, incidunt omnis molestias, deleniti
              culpa unde ipsum animi eaque. Corporis rerum expedita consectetur
              voluptates, quas exercitationem repellat dolore iusto
              reprehenderit iste repellendus placeat nisi. Esse repellat harum
              nemo dignissimos impedit perspiciatis sapiente quos reprehenderit
              quod odit aperiam magnam rem tempora, a quibusdam nam quidem quae
              nobis soluta ipsa! Rerum repudiandae distinctio illum accusamus
              facere? Harum quo repellat labore officiis totam fugiat voluptate
              exercitationem voluptatum dicta velit illum aspernatur rerum ipsum
              asperiores accusamus sit, commodi est numquam et corrupti. Hic,
              amet quis? Autem, libero qui. Quo recusandae distinctio iste,
              explicabo quibusdam eum libero laboriosam nisi ad eligendi maiores
              inventore, deserunt esse modi doloremque dolor. Illo vero
              aspernatur necessitatibus beatae rem ab deserunt vel, at delectus!
              Quaerat odit dolore aliquam obcaecati pariatur aut illum aperiam
              consequuntur exercitationem, autem tenetur tempora minima voluptas
              quia beatae qui soluta nisi quae dolores temporibus tempore ab.
              Animi ducimus molestias temporibus! Dignissimos inventore officia
              sapiente, blanditiis non eaque, distinctio molestias dicta dolore
              consectetur perferendis et eveniet soluta autem excepturi sunt
              illum architecto earum, error fugit assumenda. Nemo labore minima
              deserunt corporis? Autem laudantium voluptatibus ab magni iste non
              odio explicabo? Omnis similique dolor ea deserunt animi ipsam
              dolores eum modi dignissimos nobis quibusdam fugit aut, eius iure
              obcaecati, earum architecto porro? Quibusdam et aperiam vel cumque
              neque suscipit voluptatum unde beatae perspiciatis quis eveniet
              nobis voluptates sapiente soluta placeat sunt dolorem sint esse,
              excepturi deleniti quas cupiditate pariatur! Nesciunt, voluptatum
              atque! Dolore consectetur nostrum corporis qui deleniti, animi,
              natus repellendus, suscipit cupiditate rem voluptatum. Veniam,
              impedit eveniet nemo, amet optio aliquam blanditiis ea explicabo
              autem labore quos nulla, rem modi quis! Laboriosam sequi odit
              quasi quae dolorem. Eius ullam quam atque officia error fugit
              quibusdam sed debitis magnam aperiam ipsum minus ut suscipit ipsa
              dolorem, voluptatem in ea. Et, repellendus omnis. Minima
              praesentium placeat aut libero expedita debitis et earum magnam
              natus qui nesciunt molestias ab fuga officia, necessitatibus,
              quaerat eius dolore? Similique nobis debitis maxime consequuntur
              voluptas quia ad ut! Eaque repellat minus saepe labore at sed
              praesentium aspernatur porro nemo laudantium rerum perferendis non
              expedita asperiores unde incidunt obcaecati fuga inventore
              assumenda enim voluptatibus error, dolor laborum alias. Sit.
              Debitis adipisci omnis saepe mollitia fugit deserunt odio
              cupiditate corporis ad quidem similique earum placeat, iusto ex
              numquam officia, iste officiis. Quibusdam, nobis. Architecto,
              rerum magnam commodi iusto id laudantium! Consequatur obcaecati
              perspiciatis eius blanditiis iusto, et nulla mollitia provident
              eum, ex quas incidunt corrupti architecto repellat fugiat odio
              nihil cumque atque dolorum molestias fuga. Illum error quod
              laudantium placeat? Nobis fugiat ducimus ad, labore quod magni
              necessitatibus asperiores fuga obcaecati quam maxime, corrupti
              officia omnis ex excepturi minima quaerat. Eaque accusamus
              voluptate mollitia tempora necessitatibus libero fugiat ipsam
              distinctio! Dolorem placeat, sit consequatur quam nihil laboriosam
              animi veniam, nulla quas nesciunt quibusdam at laborum magni quae
              sapiente. Magnam iusto repudiandae voluptatibus animi ex unde,
              nulla aspernatur est numquam maxime. Eum ratione dolorum quaerat?
              Quae officiis similique maiores, numquam ullam nobis ut fugiat.
              Veritatis sint natus quasi. Ipsa odio accusantium et laboriosam
              dicta alias animi. Molestias error itaque odit amet. Itaque a est
              nihil ipsam, quasi magnam deleniti, maiores eum nisi sint cum
              totam non! Officia, modi quos? Culpa beatae laboriosam iusto
              incidunt illum! Delectus doloribus rerum ullam laborum eum.
              Officia quisquam non vitae officiis voluptatum nisi reprehenderit
              itaque quod modi mollitia, fugiat dolorum eligendi sed doloribus
              explicabo rem nobis amet, quasi dolore cumque pariatur magnam eos!
              Impedit, debitis corrupti! Ad tenetur ea in aut facilis nulla
              consectetur deserunt odit maxime maiores exercitationem sapiente
              libero temporibus tempore molestias veritatis dolore, doloremque
              iusto earum corrupti eius! Dolor eaque ea iusto quidem? Illum
              voluptate est sequi praesentium ex rerum maiores et iste eveniet
              unde beatae amet nihil, cum ullam molestias ipsam consequatur! Nam
              facere omnis voluptatibus ullam neque magni iure laborum
              voluptatum? Maxime magni sed est possimus aperiam illum sunt
              quasi! Dicta a temporibus accusamus eum harum molestiae maxime ut
              rem, praesentium, natus aspernatur incidunt explicabo quasi
              voluptate in numquam obcaecati facilis. Dolor, harum quaerat.
              Ratione, atque quasi! Fugit accusamus atque eaque asperiores saepe
              facere, nihil, velit in maiores qui vel unde temporibus, illum
              tempora consequuntur sunt totam sed consectetur eveniet delectus?
              Maiores omnis ratione illo non! Nostrum nobis, animi deserunt
              excepturi, modi aperiam magnam illum ratione commodi quia ex id
              officiis mollitia recusandae maxime tenetur a quo iste cumque
              sapiente. Assumenda. Quaerat error animi, impedit rem incidunt,
              ipsa ullam, reprehenderit dicta ipsum beatae possimus amet enim.
              Debitis commodi vitae iste dolorum id nostrum pariatur fuga
              laudantium? Perferendis voluptate placeat rerum vel. At, animi
              eius quam consectetur obcaecati dignissimos modi assumenda dolore
              eum doloremque! Ratione consectetur praesentium laborum aliquam
              expedita distinctio aperiam? Repudiandae, dolore iure impedit
              laboriosam quod aliquam accusamus labore voluptate! Reprehenderit
              quasi optio assumenda numquam, dolorem deserunt? Temporibus in,
              excepturi laborum aperiam aut suscipit amet earum ad architecto.
              Porro, excepturi mollitia? Hic quibusdam quaerat culpa blanditiis
              quam porro, repudiandae officiis! Recusandae veniam alias
              temporibus deleniti consequuntur consequatur odit dolores sequi
              quos sapiente totam impedit, laudantium iusto cum repudiandae
              officiis maxime, facilis, id molestiae. Dolores laborum, a optio
              neque sit eos. Ex quaerat provident eveniet, veritatis deserunt
              reiciendis laboriosam nemo blanditiis incidunt debitis dignissimos
              voluptas perspiciatis sunt officia, voluptates modi molestias
              ducimus unde non magni. Accusantium alias aut eius velit cum! Amet
              enim tenetur veritatis voluptas natus non ad deserunt autem ab
              corrupti iusto sapiente obcaecati nobis, rerum facilis fugiat
              alias quae ipsa optio? Dicta error quidem ut modi possimus
              blanditiis? Repellendus qui quam cupiditate nemo tenetur. Ab
              cumque ratione eius quasi totam quis error nulla animi quaerat
              perferendis doloremque hic omnis blanditiis minima, laudantium
              optio delectus? Esse fugit eius necessitatibus? Ducimus,
              aspernatur corporis cumque nemo optio vel molestias pariatur
              culpa, quisquam soluta placeat rem iste doloremque voluptas
              perspiciatis, inventore hic nulla? Quo consequuntur molestias, et
              veritatis voluptatibus enim voluptates animi? Omnis, itaque? Hic
              libero, rem exercitationem soluta esse accusamus ipsa incidunt
              dolorem omnis. Nemo saepe cumque porro aliquid totam voluptate sit
              officia, maxime pariatur debitis autem fuga excepturi aut
              accusantium. Distinctio architecto vitae, ratione eum consequuntur
              ipsam fugiat perspiciatis ipsum quam esse cumque. Ullam commodi
              ad, dolorem ratione cupiditate dolorum inventore eligendi, culpa
              quo, totam deserunt. Atque, consequatur adipisci. Eos. Eius
              voluptatibus blanditiis, molestiae minima sapiente nobis rerum
              exercitationem, perspiciatis quisquam aliquid praesentium dolor
              amet cupiditate voluptates in assumenda aliquam corporis mollitia,
              accusamus facere iste repellat. Amet excepturi ex necessitatibus.
              Libero, excepturi laboriosam suscipit consequatur hic ea, sed et
              praesentium alias quibusdam minima reiciendis voluptas debitis sit
              quia optio possimus aut. Aliquam, laboriosam. Perspiciatis sunt id
              possimus est voluptates voluptas? Fuga impedit at consequuntur
              assumenda earum quae iusto deleniti, repellat ipsam harum quis
              unde quia voluptatibus quisquam odit atque nisi repudiandae hic
              saepe ex similique architecto facilis odio ad. Consectetur!
              Architecto enim facilis aperiam in blanditiis voluptatum, itaque
              possimus earum repellat perspiciatis placeat recusandae quis.
              Quaerat numquam ab deserunt dolores magni voluptatum dolorem
              cumque iste consequatur. Deserunt magnam excepturi incidunt? Ipsa
              porro, culpa quia soluta numquam dolor adipisci iure est harum
              nesciunt esse dignissimos reiciendis expedita iste ex enim!
              Doloremque distinctio labore corrupti est eligendi incidunt hic
              excepturi ipsam architecto! Et, delectus veritatis vel harum
              explicabo dignissimos! Quam, quis, eos eveniet quod consectetur
              asperiores labore similique saepe earum dolor porro, ipsum minima.
              Minus error quo ipsam harum molestiae? Nihil, hic! Voluptas
              facilis, harum totam officiis, esse explicabo voluptatum alias
              commodi eos debitis ab rem quis reprehenderit odit dolores
              aspernatur itaque obcaecati aliquid? Illum vel, numquam aut beatae
              amet nam minima. Sequi, a! Quae ullam totam vitae facere qui
              consectetur reiciendis minus magni, omnis tempore impedit cum
              recusandae neque libero quibusdam aperiam hic praesentium
              similique ut nam nulla consequuntur ipsam assumenda. Ipsa
              doloribus minus suscipit atque error, dolor hic natus expedita,
              soluta ea odit iusto illo? Placeat minima consequatur fuga nihil
              ipsam debitis, laborum natus! Similique voluptatem doloremque
              explicabo repudiandae quidem. Pariatur quae voluptates, nihil,
              explicabo, adipisci quo labore expedita eligendi architecto itaque
              rerum. Aut officia minima saepe natus itaque error odit obcaecati
              velit adipisci libero? Maiores sint a nihil vero. Numquam nam
              officiis praesentium odit ipsum exercitationem aperiam autem,
              commodi itaque hic? Odit corporis, voluptas corrupti cumque
              laboriosam odio accusantium esse iure quidem facere pariatur,
              adipisci consectetur doloremque dicta culpa. Quo libero ab modi
              quis facilis aspernatur accusantium esse suscipit corrupti, omnis
              provident, alias, vero est. Ut quasi repellendus nobis unde! Esse,
              minima laudantium ullam magnam maiores soluta obcaecati tenetur?
              Dolore tenetur repellat, modi obcaecati illo natus odit
              consequuntur aliquam perferendis quibusdam esse consequatur
              similique provident aliquid iusto eligendi expedita fugit quaerat
              dicta, nam sit, voluptates nesciunt nulla earum! Ex. Dolor numquam
              eligendi magni dicta architecto, molestias porro voluptate sint
              dignissimos dolorem ex hic totam vitae, expedita aspernatur facere
              nulla? Voluptates minima iusto quisquam assumenda nam quibusdam
              quos, expedita dignissimos? Aliquid optio sapiente ullam facilis
              tempore, deleniti laboriosam dolorum at molestias eaque, a
              necessitatibus recusandae veniam assumenda architecto quo
              voluptas. Dolor totam atque vitae, magnam magni sit debitis rerum?
              Excepturi. Exercitationem doloribus ratione qui? Doloribus eaque,
              pariatur sapiente ex tenetur reprehenderit ipsam alias illum neque
              quibusdam labore nihil reiciendis dolores asperiores eveniet
              corrupti. Eos explicabo saepe quam expedita est hic! Esse enim
              eius necessitatibus eum praesentium quo in nihil possimus numquam
              magni? Deserunt ipsum atque aut facere exercitationem at quas sint
              vero. Officiis alias, cum reprehenderit debitis sit beatae quos.
              Laudantium quod quasi aspernatur atque. Neque, debitis aut facere
              in soluta aperiam expedita vero accusantium, alias consequatur,
              explicabo optio ex ratione officia consectetur dolorum. Molestias
              mollitia quaerat ad architecto ipsa! Sapiente quibusdam
              reprehenderit beatae natus, asperiores quasi nulla, voluptatibus
              quae distinctio officia expedita ea deleniti! Atque facere
              repellendus dignissimos incidunt, corporis veritatis alias?
              Ratione molestiae fuga excepturi vero natus facere? Cum magnam
              praesentium pariatur voluptatem cumque mollitia laboriosam iste
              eum sunt laborum est iure vitae dolor corporis similique deserunt
              quos esse, sit dolores culpa velit voluptas rerum provident minus!
              Sequi. Nihil, saepe sequi? Quis, error explicabo ipsum vitae velit
              obcaecati inventore mollitia porro magnam adipisci ducimus earum
              libero in laboriosam pariatur assumenda eveniet quisquam est dicta
              necessitatibus voluptatibus fugiat magni. Consequatur veritatis,
              mollitia sint cum id et. Et obcaecati assumenda eveniet,
              voluptates soluta aperiam unde quia expedita delectus officia
              accusantium similique dolores deserunt beatae laborum adipisci
              voluptatem accusamus harum nostrum! Eos est nihil deleniti officia
              aspernatur distinctio porro, doloremque vitae perferendis dolorem
              consequuntur modi, odio odit, aperiam consequatur cumque
              necessitatibus minus laboriosam sapiente. Voluptates temporibus
              sed cum. Enim, fuga a? Quis tempora dolore odit aliquam? Quod
              assumenda laudantium corrupti error! Provident illo quia voluptate
              minus necessitatibus omnis quod placeat, odio quas dicta alias
              animi maiores sint. Doloremque ea non perspiciatis. Distinctio
              praesentium fugit dolores odio sapiente, itaque consequuntur
              labore architecto perspiciatis modi pariatur quaerat officia
              voluptatibus? Minima accusantium consequuntur quis, nesciunt eum
              cumque architecto dolore dolorem, tempore corporis, voluptate
              beatae? Doloremque ut facere necessitatibus velit amet explicabo,
              quo mollitia totam sed quibusdam animi iure nisi a ratione maxime
              ipsam quia magni tempora voluptatum, accusamus quam molestiae.
              Optio magnam veritatis laborum! Quidem doloremque nulla facilis
              delectus, sed quisquam, ut deserunt nisi eum culpa dicta
              repellendus perspiciatis expedita est dignissimos repudiandae
              dolores distinctio! Soluta fugiat atque rem nulla nihil, culpa
              provident laudantium? Dicta sint dignissimos consequatur error
              cupiditate dolores illo impedit eos ut quidem amet deserunt minus,
              nulla ratione maxime facere eligendi, aliquam tempore eaque quis
              architecto quibusdam voluptate placeat? Temporibus, natus!
              Asperiores, dolorum deserunt? Mollitia facere rerum consequatur
              sed earum soluta aperiam magni reiciendis adipisci modi laudantium
              impedit quae aliquid saepe repudiandae blanditiis, ipsam maiores
              possimus totam eaque nulla harum! Dolor? Cumque non ipsa ad quis
              ratione illum distinctio, dolore ea at officiis perspiciatis iure
              quo sunt dignissimos aperiam? Dolorum deleniti libero ab rerum sit
              sapiente odio facere maiores unde distinctio? Eius aliquid atque
              tempore ullam asperiores facilis vero adipisci. Asperiores eaque
              consequatur, modi voluptatem molestiae nobis aliquam qui error
              atque veritatis ea id reprehenderit quisquam beatae voluptates
              corporis quos. Laudantium? Optio veniam corrupti minima, ratione
              reprehenderit unde architecto illum necessitatibus, tempore
              facilis deserunt libero debitis autem aut. Porro exercitationem
              blanditiis, dolor enim nisi delectus, vero error ducimus, pariatur
              quo tenetur. Ab reiciendis deserunt fugit modi aliquid perferendis
              rerum quibusdam officia quis. Perferendis quasi necessitatibus
              error quisquam mollitia tenetur pariatur in, iste nesciunt vero
              doloremque placeat. Hic, quia ratione. Explicabo, velit. Magnam
              cumque veniam ipsum, officia illum numquam explicabo ipsa iste
              similique doloremque minima qui error voluptates aut velit.
              Suscipit doloribus eius inventore illo iste voluptate commodi modi
              libero maxime. Repudiandae! Aspernatur, voluptas, cum fugiat
              mollitia excepturi modi illum eius quas, tempore ipsum velit.
              Voluptatum amet, enim quos rem perspiciatis veritatis esse nihil,
              consectetur incidunt magnam ipsum eos a corporis! Quia! Nulla unde
              numquam, sed ipsam aut magnam porro, quibusdam quasi quae eos
              eaque ipsum ea nam iste beatae molestias iusto nihil ad commodi
              labore cumque! Dolor, natus. Optio, similique ea. Quia, at numquam
              dolor error eius natus deserunt laboriosam et tempora? Magni
              libero est, temporibus minus molestias nostrum dicta delectus eos
              nam qui molestiae in nobis, hic eaque? Eligendi, porro!
              Exercitationem, quis sequi iure quasi consequuntur eius vitae
              eaque. Eaque distinctio laudantium aspernatur recusandae pariatur
              eligendi officia doloribus eum ratione maiores et fugit,
              praesentium reiciendis sit sed quisquam hic quaerat! Recusandae
              placeat, magnam veniam nisi rerum molestiae ullam dolorem ducimus
              quia eum neque quas sint eveniet? Cumque similique, quidem
              eligendi at animi, facilis veritatis ex asperiores ipsa, modi
              placeat ducimus. Ipsum numquam veniam quaerat quod eligendi
              delectus ipsam repudiandae rerum quo! Corrupti eligendi officiis
              atque ut sapiente modi omnis nulla iure quibusdam vel amet,
              deserunt aut ex, eius, voluptatum enim? Aliquid repudiandae vel
              nisi dolor repellendus qui voluptatem sed et veniam quam
              accusantium, voluptates tempora ab autem numquam! At eos quas
              incidunt numquam perspiciatis quidem porro dolorem expedita dolor
              perferendis? Dolorem excepturi quae facere architecto enim animi
              eaque minima a id et ipsam non quod voluptate recusandae, natus
              tempora, ea facilis sed ipsum nemo atque doloribus maiores
              dignissimos ipsa? Debitis? Velit cum sit id laboriosam eveniet
              libero nihil inventore facilis, optio quasi perferendis nisi.
              Iusto praesentium quasi doloremque maiores eos dicta error nam
              deserunt, ducimus, est ea cupiditate earum nihil. Inventore quam
              beatae dolore numquam natus quas labore, officia, nostrum quia
              veniam provident delectus ad fuga voluptatum molestias dignissimos
              ipsam? Suscipit facere assumenda ad dicta hic delectus sit dolore
              distinctio. Iste omnis libero impedit delectus, sit sed in
              exercitationem ab! Consectetur pariatur consequuntur inventore cum
              corrupti, consequatur esse, modi distinctio officiis maxime iure.
              Praesentium perferendis inventore debitis commodi voluptas autem!
              Necessitatibus iusto, deleniti porro, tenetur possimus eos aperiam
              qui quam enim fugit ea maiores voluptatibus nihil numquam eveniet,
              distinctio consequuntur rerum consequatur ex. Eum saepe fugiat
              eveniet atque esse tempora. Eligendi voluptates repellendus
              sapiente, harum soluta a dicta saepe earum sit quos repellat
              tempore doloremque! Magnam rem pariatur dolores enim! Fugiat,
              veniam. At dolorem ab alias quae explicabo vitae culp
            </div>
          </Router>
        </CustomScrollbars>
      </div>
    </>
  );
}

export default App;
