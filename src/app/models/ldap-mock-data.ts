import {UserLdap} from './user-ldap';

export const LDAP_USERS: UserLdap[] = [
  {
    id: 1,
    login: 'test.p1',
    nom: 'P1',
    prenom: 'Test',
    nomComplet: 'P1 Test',
    motDePasse: null,
    mail: 'test.p2@epsi.fr',
    role: 'ROLE_USER',
    employeNumero: 1234,
    employeNiveau: 120,
    dateEmbauche: '2020-01-01',
    publisherId: 1,
    active: true,
  },
  {
    id: 2,
    login: 'test.p2',
    nom: 'P2',
    prenom: 'Test',
    nomComplet: 'P2 Test',
    motDePasse: null,
    mail: 'test.p2@epsi.fr',
    role: 'ROLE_USER',
    employeNumero: 2234,
    employeNiveau: 220,
    dateEmbauche: '2020-02-02',
    publisherId: 2,
    active: true,
  }
]
