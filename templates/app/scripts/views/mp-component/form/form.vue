<template>
  <div>
    <div class="title">mp-form/mp-form-page/mp-checkbox-group/mp-checkbox</div>
    <div class="comp-cnt form-cnt">
      <mp-toptips
        :msg="mpForm.error"
        type="error"
        :show="!!mpForm.error"
        @hide="mpForm.error = ''"
      ></mp-toptips>

      <mp-form-page
        title="表单结构"
        subtitle="展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。"
      >
        <mp-form id="form" :rules="mpForm.rules" :models="mpForm.formData">
          <mp-cells title="单选列表项">
            <!-- <wx-radio-group @change="onFormRadioChange">
              <label
                v-for="(item, index) in mpForm.radioItems"
                :key="index"
                class="weui-cell weui-check__label"
              >
                <div class="weui-cell__hd">
                  <wx-radio :value="item.value" :checked="item.checked" />
                </div>
                <div class="weui-cell__bd">{{ item.name }}</div>
              </label>
            </wx-radio-group> -->
            <mp-checkbox-group
              prop="radio"
              multi="false"
              @change="onFormRadioChange"
            >
              <mp-checkbox
                v-for="(item, index) in mpForm.radioItems"
                :key="index"
                :label="item.name"
                :value="item.value"
                :checked="item.checked.toString()"
              ></mp-checkbox>
            </mp-checkbox-group>
          </mp-cells>

          <mp-cells title="复选列表项">
            <!-- <wx-checkbox-group @change="onFormCheckboxChange">
              <label
                v-for="(item, index) in mpForm.checkboxItems"
                :key="index"
                class="weui-cell weui-check__label"
              >
                <div class="weui-cell__hd">
                  <wx-checkbox :value="item.value" :checked="item.checked" />
                </div>
                <div class="weui-cell__bd">{{ item.name }}</div>
              </label>
            </wx-checkbox-group> -->
            <mp-checkbox-group
              prop="checkbox"
              multi="true"
              @change="onFormCheckboxChange"
            >
              <mp-checkbox
                v-for="(item, index) in mpForm.checkboxItems"
                :key="index"
                :label="item.name"
                :value="item.value"
                :checked="item.checked.toString()"
              ></mp-checkbox>
            </mp-checkbox-group>
          </mp-cells>

          <mp-cells title="表单" footer="底部说明文字底部说明文字">
            <mp-cell prop="name" title="姓名">
              <wx-input
                @input="onFormInputChange"
                data-field="name"
                class="weui-input"
                placeholder="请输入姓名"
              ></wx-input>
            </mp-cell>
            <mp-cell prop="qq" title="qq">
              <wx-input
                @input="onFormInputChange"
                data-field="qq"
                class="weui-input"
                placeholder="请输入qq"
              ></wx-input>
            </mp-cell>
            <mp-cell prop="mobile" title="手机号" ext-class="weui-cell_vcode">
              <wx-input
                @input="onFormInputChange"
                data-field="mobile"
                class="weui-input"
                placeholder="请输入手机号"
              ></wx-input>
              <wx-button
                slot="footer"
                type="default"
                class="weui-btn weui-vcode-btn"
              >
                获取验证码
              </wx-button>
            </mp-cell>
            <mp-cell prop="date" title="日期">
              <wx-picker
                data-field="date"
                mode="date"
                :value="mpForm.date"
                start="2015-09-01"
                end="2017-09-01"
                @change="onFormDateChange"
              >
                <div class="weui-input">{{ mpForm.date }}</div>
              </wx-picker>
            </mp-cell>
            <mp-cell prop="vcode" title="验证码" ext-class="weui-cell_vcode">
              <wx-input
                @input="onFormInputChange"
                data-field="vcode"
                class="weui-input"
                placeholder="请输入验证码"
              ></wx-input>
              <div slot="footer">
                <wx-image
                  class="weui-vcode-img"
                  src="data:image/jpeg;base64,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"
                  style="width: 108px"
                ></wx-image>
              </div>
            </mp-cell>
          </mp-cells>

          <mp-cells title="提交后表单项报错">
            <mp-cell show-error="true" prop="idcard" title="卡号">
              <wx-input
                @input="onFormInputChange"
                data-field="idcard"
                class="weui-input"
                placeholder="请输入卡号"
              ></wx-input>
            </mp-cell>
          </mp-cells>

          <mp-cells title="开关">
            <mp-cell title="标题文字">
              <div slot="footer">
                <wx-switch :checked="true"></wx-switch>
              </div>
            </mp-cell>
          </mp-cells>

          <mp-cells title="文本框">
            <mp-cell title="标题文字">
              <wx-input class="weui-input" placeholder="请输入文本"></wx-input>
            </mp-cell>
          </mp-cells>

          <mp-cells title="文本域">
            <mp-cell has-header="false" has-footer="false">
              <wx-textarea
                class="weui-textarea"
                placeholder="请输入文本"
                style="height: 3.3em"
              ></wx-textarea>
              <div class="weui-textarea-counter">0/200</div>
            </mp-cell>
          </mp-cells>

          <mp-cells title="选择">
            <mp-cell ext-class="weui-cell_select weui-cell_select-before">
              <div slot="title" style="width: 105px">
                <wx-picker
                  @change="mpForm.countryCodeIndex = $event.detail.value"
                  :value="mpForm.countryCodeIndex"
                  :range="mpForm.countryCodes"
                >
                  <div class="weui-select">
                    {{ mpForm.countryCodes[mpForm.countryCodeIndex] }}
                  </div>
                </wx-picker>
              </div>
              <wx-input class="weui-input" placeholder="请输入号码"></wx-input>
            </mp-cell>
          </mp-cells>

          <mp-cells title="选择">
            <mp-cell has-header="false" ext-class="weui-cell_select">
              <wx-picker
                @change="mpForm.accountIndex = $event.detail.value"
                :value="mpForm.accountIndex"
                :range="mpForm.accounts"
              >
                <div class="weui-select">
                  {{ mpForm.accounts[mpForm.accountIndex] }}
                </div>
              </wx-picker>
            </mp-cell>
            <mp-cell ext-class="weui-cell_select weui-cell_select-after">
              <div slot="title" class="weui-label">国家/地区</div>
              <wx-picker
                @change="mpForm.countryIndex = $event.detail.value"
                :value="mpForm.countryIndex"
                :range="mpForm.countries"
              >
                <div class="weui-select">
                  {{ mpForm.countries[mpForm.countryIndex] }}
                </div>
              </wx-picker>
            </mp-cell>
          </mp-cells>
        </mp-form>

        <div slot="tips">
          <label class="weui-agree" @click="mpForm.isAgree = !mpForm.isAgree">
            <wx-checkbox :checked="mpForm.isAgree" />
            <span class="weui-agree__text">
              阅读并同意<a href="javascript:void(0)">《相关条款》</a>
            </span>
          </label>
        </div>

        <div slot="button">
          <wx-button class="weui-btn" type="primary" @tap="doSubmitForm">
            确定
          </wx-button>
        </div>
      </mp-form-page>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpForm: {
        error: '',
        radioItems: [
          { name: 'cell standard', value: '0', checked: false },
          { name: 'cell standard', value: '1', checked: false }
        ],
        checkboxItems: [
          { name: 'standard is dealt for u.', value: '0', checked: false },
          { name: 'standard is dealicient for u.', value: '1', checked: false }
        ],
        items: [
          { name: 'USA', value: '美国' },
          { name: 'CHN', value: '中国', checked: 'true' },
          { name: 'BRA', value: '巴西' },
          { name: 'JPN', value: '日本' },
          { name: 'ENG', value: '英国' },
          { name: 'TUR', value: '法国' }
        ],
        date: '2016-09-01',
        time: '12:01',
        countryCodes: ['+86', '+80', '+84', '+87'],
        countryCodeIndex: 0,
        countries: ['中国', '美国', '英国'],
        countryIndex: 0,
        accounts: ['微信号', 'QQ', 'Email'],
        accountIndex: 0,
        isAgree: false,
        formData: {},
        rules: [
          {
            name: 'radio',
            rules: { required: false, message: '单选列表是必选项' }
          },
          {
            name: 'checkbox',
            rules: { required: true, message: '多选列表是必选项' }
          },
          {
            name: 'name',
            rules: { required: true, message: '请输入姓名' }
          },
          {
            name: 'qq',
            rules: { required: true, message: 'qq必填' }
          },
          {
            name: 'mobile',
            rules: [
              { required: true, message: 'mobile必填' },
              { mobile: true, message: 'mobile 格式不对' }
            ]
          },
          {
            name: 'vcode',
            rules: { required: true, message: '验证码必填' }
          },
          {
            name: 'idcard',
            rules: {
              validator(rule, value) {
                if (!value || value.length !== 18) return 'idcard 格式不正确';
                return '';
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    onFormRadioChange(evt) {
      console.log('[mp-checkbox] change', evt.detail);
      const radioItems = this.mpForm.radioItems;
      for (let i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value === evt.detail.value;
      }
      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // 拷贝
      this.mpForm.formData.radio = evt.detail.value;
    },
    onFormCheckboxChange(evt) {
      console.log('[mp-checkbox] change', evt.detail);
      const checkboxItems = this.mpForm.checkboxItems;
      const values = evt.detail.value;
      for (let i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;
        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // 拷贝
      this.mpForm.formData.checkbox = evt.detail.value;
    },
    onFormInputChange(evt) {
      const { field } = evt.currentTarget.dataset;
      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // 拷贝
      this.mpForm.formData[field] = evt.detail.value;
    },
    onFormDateChange(evt) {
      const date = evt.detail.value;
      this.mpForm.date = date;
      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // 拷贝
      this.mpForm.formData.date = evt.detail.value;
    },
    doSubmitForm() {
      document
        .querySelector('#form')
        .$$wxCustomComponent.validate((valid, errors) => {
          if (!valid) {
            console.log('[mp-form] invalid', valid, errors);
            const firstError = Object.keys(errors);
            if (firstError.length) {
              this.mpForm.error = errors[firstError[0]].message;
            }
          } else {
            console.log('[mp-form] valid success', this.mpForm.formData);
          }
        });
    }
  }
};
</script>
