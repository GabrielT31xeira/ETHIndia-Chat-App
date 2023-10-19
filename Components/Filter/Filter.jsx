import React, { useState, useContext } from 'react'
import Image from 'next/image'

//INTERNAL IMPORT
import Style from './Filter.module.css'
import images from '../../assets'
import { ChatAppContect } from '../../Context/ChatAppContext'
import { Model } from '../index'

const Filter = () => {
  const { account, addFriends } = useContext(ChatAppContect)

  //USESTATE
  const [addFriend, setAddFriend] = useState(false)
  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt="image" width={20} height={20} />
            <input type="text" placeholder="Pesquisar.." />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt="clear" width={20} height={20} />
            Limpar Conversas
          </button>
          <button onClick={() => setAddFriend(true)}>
            <Image src={images.user} alt="clear" width={20} height={20} />
            Adicionar Usuario
          </button>
        </div>
      </div>

      {/* //MODEL COMPONENT */}
      {addFriend && (
        <div className={Style.Filter_model}>
          <Model
            openBox={setAddFriend}
            title="Bem-Vindo ao"
            head="Site de Denúncias Anônimas do Estado do Tocantins"
            info=""
            smallInfo="Viu alguma atitude relacionado ao dinheiro publico? denuncie"
            // image={images.hero}
            functionName={addFriends}
          />
        </div>
      )}
    </div>
  )
}

export default Filter
