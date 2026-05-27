import type { ICharacteristic } from "../../shared"
import "./_characteristic.scss"

interface Props {
  char: ICharacteristic
}

export const Characteristic = ({char}: Props) => {
  return (
    <div className='char'>
      <div className="char__content">
        <h3 className="char__title">{char.title}</h3>
        <p className="char__value">{char.value}</p>
        <img className="char__image" src={char.image} />
        </div>
    </div>
  )
}
