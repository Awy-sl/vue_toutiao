<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" style="color: #fff;" />
    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        type="number"
        v-model="user.mobile"
        maxlength="11"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
      >
        <i slot="left-icon" class="iconfont">
          &#xe621;
        </i>
      </van-field>
      <van-field
        v-model="user.code"
        type="code"
        name="code"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
      >
        <i slot="left-icon" class="iconfont">
          &#xe604;
        </i>
        <template #button>
          <van-count-down
            @finish="isCountDownShow = false"
            v-if="isCountDownShow"
            :time="1000 * 60"
            format="ss s"
          />
          <van-button
            v-else
            @click="onSendSms"
            round
            class="send-sms-btn"
            size="mini"
            type="default"
            native-type="button"
          >
            发送验证码
          </van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button
          block
          class="from-submit-btn"
          type="info"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { subLogin, requestCode } from '@/api'

export default {
  name: 'login',
  data () {
    return {
      //  用户
      user: {
        mobile: '',
        code: ''
      },
      // 登录表单验证
      userFormRules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号'
          },
          {
            pattern: /^1[3|5|7|8]\d{9}/,
            message: '请输入正确的手机号'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码'
          },
          {
            pattern: /^\d{6}/,
            message: '验证码格式错误'
          }
        ]
      },
      // 显示倒计时
      isCountDownShow: false
    }
  },
  methods: {
    // 提交表单登录
    async onSubmit () {
      // 在组件中调用挂载的 vant 组件需要通过 this.$xxx 来调用
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 禁用背景点击
        duration: 0
      })
      try {
        const user = this.user
        const { data: result } = await subLogin(user)
        this.$toast.success('登录成功')
        console.log(result)
        this.$store.commit('setUser', result.data)
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机验证码错误')
        } else {
          this.$toast.fail('登录失败', err)
        }
      }
    },
    // 获取验证码
    async onSendSms () {
      //  触发手机号的验证
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (error) {
        return console.log('验证失败', error)
      }
      // 验证通过显示倒计时
      this.isCountDownShow = true

      // 获取验证码  用不了了 ╮(╯▽╰)╭
      try {
        requestCode(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送太频繁请稍后重试')
        } else {
          console.log('未知错误', err)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .van-form {
    .from-submit-btn {
      border-radius: 10px;
      background: #6db4fb;
      border: none;
    }
    .send-sms-btn {
      width: 152px;
      height: 46px;
      font-size: 22px;
      background: #f3f3f3;
      color: #666;
    }
    .van-field {
      i {
        font-size: 37px;
      }
    }
  }
}
</style>
