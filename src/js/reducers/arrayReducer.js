export default (entityName, entityModifiers, entityReducer) =>
  (state = [], action) => {
    switch (action.type) {
      case `ADD_${entityName}`:
        {
          return [
            ...state,
            entityReducer(undefined, action),
          ];
        }
      case `DELETE_${entityName}`:
        {
          return state.filter(t => t.id !== action.payload.id);
        }
      default:
        {
          if (entityModifiers.indexOf(action.type) !== -1) {
            return state.map((t) => {
              if (t.id === action.payload.id) {
                return entityReducer(t, action);
              }
              return t;
            });
          }
          return state;
        }
    }
  };
