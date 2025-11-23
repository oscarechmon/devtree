import {body} from 'express-validator'
import { Router } from 'express'
import User from './models/Users'
import { createAccount, getUser, login, updateProfile, uploadImage } from './handlers'
import { handleInputErrors } from './middleware/validations'
import { authenticate } from './middleware/auth'
const router = Router()

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('El correo es invalido'),
    body('password')
        .isLength({min:8})
        .withMessage('La contraseña tiene que tener minimo 8 caracteres'),
    handleInputErrors,
    createAccount
)
router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('El correo es invalido'),
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'),
    handleInputErrors,
    login   
)
router.get('/user',authenticate, getUser)
router.patch('/user',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('description')
        .notEmpty()
        .withMessage('La descripción no puede ir vacio'),
    authenticate,
    updateProfile)
router.post('/user/image',authenticate, uploadImage)

export default router