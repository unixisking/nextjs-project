import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const INITIAL_STATE = {
  step: 1,
  isClient: undefined,
  zoneSelection: undefined,
  freeSession: undefined,
  method: undefined,
  formule: undefined,
};

export enum HAIR_REMOVAL_METHOD {
  LASER,
  ELECTROLYSE,
}

type BookingProps = {
  isClient: boolean | undefined;
  step: number;
  zoneSelection: boolean | undefined;
  freeSession: boolean | undefined;
  method: HAIR_REMOVAL_METHOD | undefined;
  formule: string | undefined;
};

type BookingContextProps = BookingProps & {
  setBookingData: Dispatch<SetStateAction<BookingProps>>;
  handlePrev: () => void;
  handleNext: () => void;
};
export const bookingContext = createContext<BookingContextProps>({
  ...INITIAL_STATE,
  setBookingData: () => null,
  handlePrev: () => null,
  handleNext: () => null,
});

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookingData, setBookingData] = useState<BookingProps>(INITIAL_STATE);

  const handlePrev = () => {
    setBookingData(({ step, ...prevState }) => {
      const prevStep = step - 1 < 1 ? 1 : step - 1;
      if (prevStep === 1) {
        // Reset everything
        return {
          ...prevState,
          ...INITIAL_STATE,
        };
      }
      return { ...prevState, step: prevStep };
    });
  };

  const handleNext = () => {
    const { freeSession, isClient, formule, method, zoneSelection, step } =
      bookingData;
    if (freeSession === true || isClient === false) {
      // navigate to agenda.ch free session
      window.location.href = '';
      return;
    }

    // TODO: Add redirect here also
    if (isClient === true) {
      // Redirect to formule based on method
      if (zoneSelection === undefined) {
        // Step 2
        return;
      } else if (
        // Step 3
        step === 3 &&
        method === undefined &&
        freeSession === false
      ) {
        return;
      } else if (step == 4 && formule == undefined) {
        return;
      }
    }
    setBookingData((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
    /**
     * If freeSession is enabled navigaate directly
     * If isClient then
     * 	check for
     */
  };
  return (
    <bookingContext.Provider
      value={{
        ...bookingData,
        setBookingData,
        handleNext,
        handlePrev,
      }}
    >
      {children}
    </bookingContext.Provider>
  );
};

export const useBookingData = () => {
  const bookingData = useContext(bookingContext);

  return bookingData;
};
