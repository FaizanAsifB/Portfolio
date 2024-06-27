import HamburgerIcon from './hamburger-icon'

type HamburgerButtonProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HamburgerButton = ({ isOpen, setIsOpen }: HamburgerButtonProps) => {
  return (
    <button
      className={`mob-menu relative z-[9999] lg:hidden ${isOpen && 'opened'}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label='Main Menu '
    >
      <HamburgerIcon />
    </button>
  )
}

export default HamburgerButton
