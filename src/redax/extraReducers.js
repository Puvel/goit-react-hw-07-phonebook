import { fetchContacts, addContact, deleteContact } from 'redax/operations';
export const contactsExtraReducers = builder => {
  builder.addCase(fetchContacts.pending, state => {
    state.isLoading = true;
    state.error = null;
  });
  builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
  });
  builder.addCase(fetchContacts.rejected, (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
  });

  builder.addCase(addContact.pending, state => {
    state.isLoading = true;
    state.error = null;
  });
  builder.addCase(addContact.fulfilled, (state, { payload }) => {
    state.items.push(payload);
    state.isLoading = false;
  });
  builder.addCase(addContact.rejected, (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
  });

  builder.addCase(deleteContact.pending, state => {
    state.isLoading = true;
    state.error = null;
  });
  builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
    state.items = state.items.filter(({ id }) => id !== payload.id);
    state.isLoading = false;
  });
  builder.addCase(deleteContact.rejected, (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
  });
};
