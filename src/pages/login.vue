<template>
  <div class="wrapper">
    <div class="login-box flex justify-end">
      <div class="form flex flex-col">
        <h2 class="leading-loose text-2xl font-600">Welcome back !</h2>
        <span class="mb-4 text-gray-400">Start enjoying your journey !</span>

        <el-form ref="ruleFormRef" :model="form" :rules="rules">
          <el-form-item class="mb-6" prop="email">
            <el-input class="form-input" v-model="form.email" placeholder="you@example.com">
              <template #prefix>
                <div class="icon">
                  <Message style="width: 15px; height: 15px; color: 8aa7ca" />
                </div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              class="form-input"
              v-model="form.password"
              type="password"
              show-password
              placeholder="At least 8 characters"
            >
              <template #prefix>
                <div class="icon">
                  <Lock style="width: 15px; height: 15px; color: 8aa7ca" />
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-form>

        <el-link class="mt-2 mb-4" type="primary" :underline="false">Forgot password?</el-link>

        <el-button class="btn-submit" type="primary" @click="submitForm(ruleFormRef)">
          Login
        </el-button>

        <el-divider class="divider mt-6 mb-6" content-position="center">or</el-divider>

        <el-row class="mb-4" justify="space-between">
          <el-button class="btn-login-way">
            <el-image class="logo" src="img/qq.png" />
            QQ
          </el-button>
          <el-button class="btn-login-way">
            <el-image class="logo" src="img/wechat.png" />
            微信
          </el-button>
        </el-row>

        <div class="register text-gray-400">
          Don't you have a account? &nbsp;<el-link type="primary">Sign Up</el-link>
        </div>

        <div class="copyright text-gray-400">@2023 ALL RIGHTS RESERVED</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { isEmail } from '@/utils/verify'
import { useLoginStore } from '@/store/login'

const props = defineProps({
  redirect: {
    type: String,
    default: ''
  }
})

const $route = useRoute()
const $router = useRouter()
const Login = useLoginStore()

console.log('$route: ', $route)
const toRoutePath = computed(() => props.redirect || '/')

const ruleFormRef = ref<FormInstance>()
const form = reactive({
  email: '1350106846@qq.com',
  password: '88888888'
})

const checkEmail = (rule: any, value: any, callback: any) => {
  if (!value.length) {
    callback(new Error('Please input the email'))
  } else {
    if (!isEmail(value)) {
      callback(new Error('Please input the correct email address'))
      return
    }
    callback()
  }
}

const rules = ref<FormRules>({
  email: [{ validator: checkEmail, trigger: 'blur' }],
  password: [{ min: 8, max: 20, message: 'Length should be 8 to 20', trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      Login.LoginByEmail(form).then(() => {
        $router.push({ path: toRoutePath.value })
      })
      return true
    }

    console.log('error submit!')
    return false
  })
}
</script>

<style lang="scss" scoped>
.wrapper {
  @include flex(center);
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: #03a9f4;
  .login-box {
    min-width: 1000px;
    height: 600px;
    padding: 30px;
    border-radius: 10px;
    background: #ffffff;
    background-image: url('@/assets/images/login.png');
    background-size: contain;
    background-repeat: no-repeat;
    .form {
      width: 350px;
      height: 100%;
      padding-top: 60px;
      .form-input {
        border-radius: 6px;
        background: #f5f5f5;

        :deep(.el-input__wrapper) {
          padding: 0 8px 0 0;
          height: 36px;
          border-radius: inherit;
          background: inherit;

          .el-input__prefix-inner {
            .icon {
              @include flex(center);
              padding: 4px 4px;
              border-radius: 2px;
              background: #ffffff;
            }
            & > :first-child {
              margin-left: 8px;
            }
          }
          .el-input__inner {
            padding-left: 0;
            background: inherit;
            box-shadow: none;
            border: none;
            &::placeholder {
              font-size: 14px;
            }
          }
        }
      }

      .el-link {
        @include flex(flex-end);
      }
      .divider {
        :deep(.el-divider__text) {
          color: rgba(107, 114, 128, 0.8);
        }
      }

      .btn-submit {
        height: 36px;
        width: 100%;
      }

      .btn-login-way {
        width: 45%;
        .logo {
          width: 25px;
          margin-right: 5px;
        }
      }

      .register {
        @include flex(center);
        font-size: 14px;
      }

      .copyright {
        @include flexDirection(flex-end);
        flex-grow: 1;
        font-size: 14px;
        text-align: center;
        vertical-align: bottom;
      }
    }
  }
}
</style>
