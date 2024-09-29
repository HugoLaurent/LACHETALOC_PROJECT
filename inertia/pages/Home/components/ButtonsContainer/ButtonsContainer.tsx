import './buttons-container-style.css'

import ButtonIconText from '~/components/Buttons/ButtonIconText'

import {
  appartementIcon,
  banlieuIcon,
  campagneIcon,
  cityCenterIcon,
  collocationIcon,
  studioIcon,
  timeIcon,
} from '~/assets/icons'

type ButtonData = {
  icon: string
  text: string
}

const buttonsData: { [key: number]: ButtonData } = {
  0: {
    icon: studioIcon,
    text: 'Studios',
  },
  1: {
    icon: appartementIcon,
    text: 'Appartements',
  },

  2: {
    icon: collocationIcon,
    text: 'Collocations',
  },
  3: {
    icon: timeIcon,
    text: 'Court terme',
  },
  4: {
    icon: timeIcon,
    text: 'Long terme',
  },
  5: {
    icon: cityCenterIcon,
    text: 'Centres Ville',
  },
  6: {
    icon: banlieuIcon,
    text: 'Banlieue',
  },
  7: {
    icon: campagneIcon,
    text: 'Campagne',
  },
}

export default function ButtonsContainer() {
  return (
    <div>
      <div className="buttons-container">
        {Object.keys(buttonsData).map((key: string) => {
          const index = Number(key)
          return (
            <ButtonIconText
              key={key}
              icon={buttonsData[index].icon}
              text={buttonsData[index].text}
              onClick={() => console.log('clicked')}
            />
          )
        })}
      </div>
    </div>
  )
}
