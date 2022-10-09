import { Logo } from '@/icons';
import { useState } from 'react';
import { IHeaderOptions } from './models';
import './styles/Header.scss';

const getHeaderOptions = (): IHeaderOptions[] => {
  return [
    { text: 'pomodoro', id: 1 },
    { text: 'short break', id: 2 },
    { text: 'long break', id: 3 },
  ];
};

const Header = () => {
  const [options] = useState(getHeaderOptions);
  const [selectedOption, setSelectedOption] = useState<IHeaderOptions>(options[0]);

  const handleSelected = (option: IHeaderOptions) => {
    if (option.id !== selectedOption.id) {
      setSelectedOption({ ...option });
    }
  };

  return (
    <div className='header'>
      <Logo />

      <div className='header__options'>
        {options.map(({ text, id }) => (
          <button
            onClick={() => handleSelected({ text, id })}
            className={`header__options__item ${selectedOption.id === id ? 'selected' : ''}`}
            key={id}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
