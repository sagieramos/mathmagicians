const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'SET_CALC_STATE':
      return { ...state, calcState: action.payload };
    case 'SET_QUOTE_DATA':
      return { ...state, quoteData: action.payload };
    default:
      return state;
  }
};

const initialState = {
  input: '',
  calcState: {
    total: null,
    next: null,
    operation: null,
  },
  quoteData: {
    quote: {
      quote: '',
      author: '',
      category: '',
    },
    loading: true,
    error: null,
  },
};

export { reducer, initialState };
