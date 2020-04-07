import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './action';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    // eslint-disable-next-line prefer-object-spread
    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso', {
      className: 'toast',
    });

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar o perfil, verifique seus dados', {
      className: 'toast',
    });
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
