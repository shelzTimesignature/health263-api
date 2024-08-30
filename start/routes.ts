/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HighBreedClaimsController = () => import('#controllers/high_breed_claims_controller')
const ClaimsController = () => import('#controllers/claims_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/claims', [ClaimsController, 'post'])
router.post('/claims-high-breed', [HighBreedClaimsController, 'post'])
