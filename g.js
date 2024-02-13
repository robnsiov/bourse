/*jshint esversion: 8 */

const generalInformation = {
  template: `
    <!-- one -->
<div class="row">
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
      <a v-bind:href="'http://www.tsetmc.com/Loader.aspx?ParTree=151311&i='+[[ $root.$data.exchange_tse_code ]]"
         target="_blank"
         class="py-1 mx-1 text-truncate" v-bind:title="$root.$data.symbol"><b>[[ $root.$data.symbol ]]</b></a>
      <span class="py-1 mx-1 text-truncate" v-bind:title="$root.$data.symbol_full_name"><b>[[ $root.$data.symbol_full_name ]]</b></span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
          <span class="py-1 mx-1 text-truncate text-danger"
                v-if="$root.$data.group_name === '[[ $root.$data.exchange_prohibited ]]'"
                v-bind:title="$root.$data.group_name"><b>[[ $root.$data.group_name ]]</b></span>
      <span class="py-1 mx-1 text-truncate text-danger"
            v-if="$root.$data.market_name === '[[ $root.$data.exchange_closed ]]'"
            v-bind:title="$root.$data.market_name"><b>[[ $root.$data.market_name ]]</b></span>
      <span class="py-1 mx-1 text-truncate" v-if="$root.$data.group_name !== '[[ $root.$data.exchange_prohibited ]]'"
            v-bind:title="$root.$data.group_name"><b>[[ $root.$data.group_name ]]</b></span>
      <span class="py-1 mx-1 text-truncate" v-if="$root.$data.group_name !== '[[ $root.$data.exchange_prohibited ]]'"
            v-bind:title="$root.$data.market_name"><b>[[ $root.$data.market_name ]]</b></span>
    </div>
  </div>
  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-2 p-1">
    <div class="card text-center">
          <span class="py-1 mx-1 text-truncate" v-bind:title="[[ simpleNumberSeparator($root.$data.last_price) ]]">
            <b>آخرین قیمت : </b>
            <b v-bind:style="$root.$data.last_price < this.price_information.py ? {'color' : 'red'}: {'color' : 'green'}">[[ simpleNumberSeparator($root.$data.last_price) ]]</b>
            </span>
      <span class="py-1 mx-1 text-truncate" v-bind:title="[[ simpleNumberSeparator($root.$data.close_price )]]">
            <b>قیمت پایانی : </b>
            <b v-bind:style="$root.$data.close_price < this.price_information.py ? {'color' : 'red'}: {'color' : 'green'}">[[ simpleNumberSeparator($root.$data.close_price) ]]</b>
            </span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
          <span class="py-1 mx-1 text-truncate" title="ورود پول حقوقی در هفته">
            <b>ورود پول حقوقی در هفته</b></span>
      <span class="py-1 mx-1 text-truncate" dir="ltr"
            v-bind:title="[[ simpleNumberSeparator($root.$data.week_entry_legal_money) ]]">
            <b v-bind:style="$root.$data.week_entry_legal_money <1 ? {'color' : 'red'}: {'color' : 'green'}">[[ numberConvertToMillion($root.$data.week_entry_legal_money) ]]</b></span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
          <span class="py-1 mx-1 text-truncate" title="ورود پول حقوقی در ماه">
            <b>ورود پول حقوقی در ماه</b></span>
      <span class="py-1 mx-1 text-truncate" dir="ltr"
            v-bind:title="[[ simpleNumberSeparator($root.$data.month_entry_legal_money) ]]">
            <b v-bind:style="$root.$data.month_entry_legal_money <1 ? {'color' : 'red'}: {'color' : 'green'}">[[ numberConvertToMillion($root.$data.month_entry_legal_money) ]]</b></span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
      <span class="py-1 mx-1 text-truncate" title="میانگین قیمت 50 روزه"><b>میانگین قیمت 50 روز</b></span>
      <span class="py-1 mx-1 text-truncate" dir="ltr"
            v-bind:title="[[ simpleNumberSeparator($root.$data.pl_average_50_day) ]]">
            <b v-bind:style=" $root.$data.last_price < $root.$data.pl_average_50_day  ? {'color' : 'red'}: {'color' : 'green'}">[[ numberConvertToMillion($root.$data.pl_average_50_day) ]]</b></span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
      <span class="py-1 mx-1 text-truncate" title="میانگین قیمت 100 روزه"><b>میانگین قیمت 100 روزه</b></span>
      <span class="py-1 mx-1 text-truncate" dir="ltr"
            v-bind:title="[[ simpleNumberSeparator($root.$data.pl_average_100_day) ]]">
            <b v-bind:style=" $root.$data.last_price < $root.$data.pl_average_100_day  ? {'color' : 'red'}: {'color' : 'green'}">[[ numberConvertToMillion($root.$data.pl_average_100_day) ]]</b></span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
      <span class="py-1 mx-1 text-truncate" title="EPS"><b>EPS</b></span>
      <span class="py-1 mx-1 text-truncate" dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.eps) ]]">
            <b v-bind:style=" $root.$data.eps < 1  ? {'color' : 'red'}: {'color' : 'green'}">[[ simpleNumberSeparator($root.$data.eps) ]]</b>
          </span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
      <span class="py-1 mx-1 text-truncate" title="p/e"><b>p/e</b></span>
      <span class="py-1 mx-1 text-truncate" v-bind:title="[[ $root.$data.pe ]]">
            <b v-bind:style="$root.$data.pe < 0 || $root.$data.pe > ( $root.$data.group_pe * 2 ) ? {'color' : 'red'}: $root.$data.pe < $root.$data.group_pe ? {'color' : 'green'} : {}">[[ $root.$data.pe ]]</b> 
          </span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
      <span class="py-1 mx-1 text-truncate" title="نسبت PE نماد به PE گروه"><b>نسبت PE نماد به PE گروه</b></span>
      <span class="py-1 mx-1 text-truncate" v-bind:title="[[ $root.$data.pe / $root.$data.group_pe ]]"><b>[[ numberConvertToMillion($root.$data.pe / $root.$data.group_pe) ]]</b></span>
    </div>
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-1 p-1">
    <div class="card text-center">
      <span class="py-1 mx-1 text-truncate" title="گروهی p/e"><b>گروهی p/e</b></span>
      <span class="py-1 mx-1 text-truncate"
            v-bind:title="[[ $root.$data.group_pe ]]"><b>[[ numberConvertToMillion($root.$data.group_pe) ]]</b></span>
    </div>
  </div>
  <!--    </div>-->
  <!-- two -->
  <!--    <div class="row">-->
  <div class="col col-sm-12 col-md-12 col-lg-6 col-xl-4 p-1">
    <div class="card h-100">
      <a class="mdi mdi-window-maximize maximize-button"></a>
      <a class="mdi mdi-window-minimize minimize-button"></a>
      <div class="row px-2">
        <div class="col col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1" style="border-left: 5px solid lightgrey">
          <div class="row text-center h6 fw-bold" title="حجم معاملات">حجم معاملات</div>
          <table class="table table-cell table-hover" style="aspect-ratio:1.3;table-layout: fixed">
            <tbody class="align-middle">
            <tr class="even">
              <td class="text-end fw-bold" title="حجم مبنا">حجم مبنا</td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:title="[[ simpleNumberSeparator(volume_table.bvol) ]]">
                [[ numberConvertToMillion(volume_table.bvol) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="حجم معاملات روز">حجم معاملات روز</td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:title="[[ simpleNumberSeparator(volume_table.tvol) ]]">
                [[ numberConvertToMillion(volume_table.tvol) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="میانگین حجم ۳۰ روز">میانگین حجم ۳۰ روز</td>
              <td class="text-start fw-bold"
                  v-bind:title="[[ simpleNumberSeparator(volume_table.bvol_average_30_day) ]]"
                  dir="ltr">
                [[ numberConvertToMillion(volume_table.bvol_average_30_day) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="میانگین حجم ۹۰ روز">میانگین حجم ۹۰ روز</td>
              <td class="text-start fw-bold"
                  v-bind:title="[[ simpleNumberSeparator(volume_table.bvol_average_90_day) ]]"
                  dir="ltr">
                [[ numberConvertToMillion(volume_table.bvol_average_90_day) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="نسبت حجم معاملات روز به میانگین ماه">نسبت حجم معاملات روز به
                میانگین ماه
              </td>
              <td class="text-start fw-bold"
                  v-bind:style="[ (volume_table.tvol / volume_table.bvol_average_30_day)<1 ?
                   {'color' : 'red'} : (volume_table.tvol / volume_table.bvol_average_30_day)<1.99 ?
                    {'color' : 'green'} : {'color' : 'blue'} ]"
                  v-bind:title="[[ simpleNumberSeparator(volume_table.tvol / volume_table.bvol_average_30_day) ]]"
                  dir="ltr">
                [[ numberConvertToMillion(volume_table.tvol / volume_table.bvol_average_30_day) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="نسبت حجم معاملات روز به میانگین 3 ماه">نسبت حجم معاملات روز به
                میانگین 3 ماه
              </td>
              <td class="text-start fw-bold"
                  v-bind:style="[ (volume_table.tvol / volume_table.bvol_average_90_day)<1 ?
                   {'color' : 'red'} : (volume_table.tvol / volume_table.bvol_average_90_day)<1.99 ?
                    {'color' : 'green'} : {'color' : 'blue'} ]"
                  v-bind:title="[[ simpleNumberSeparator(volume_table.tvol / volume_table.bvol_average_90_day) ]]"
                  dir="ltr">
                [[ numberConvertToMillion(volume_table.tvol / volume_table.bvol_average_90_day) ]]
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col col-sm-12 col-md-6 col-lg-6 col-xl-6 p-1">
          <div class="row text-center h6 fw-bold" title="ارزش معاملات">ارزش معاملات</div>
          <table class="table table-hover" style="aspect-ratio:1.3 / 1;table-layout: fixed">
            <tbody class="align-middle">
            <tr class="even">
              <td class="text-right fw-bold" title="ارزش بازار">ارزش بازار</td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:title="[[ simpleNumberSeparator(value_table.mv) ]]">
                [[ numberConvertToMillion(value_table.mv) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="ارزش معاملات روز">ارزش معاملات روز</td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:title="[[ simpleNumberSeparator(value_table.tval) ]]">
                [[ numberConvertToMillion(value_table.tval) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="میانگین ارزش ۳۰ روز">میانگین ارزش ۳۰ روز</td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:title="[[ simpleNumberSeparator(value_table.bval_average_30_day) ]]">
                [[ numberConvertToMillion(value_table.bval_average_30_day) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="میانگین ارزش ۹۰ روز">میانگین ارزش ۹۰ روز</td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:title="[[ simpleNumberSeparator(value_table.bval_average_90_day) ]]">
                [[ numberConvertToMillion(value_table.bval_average_90_day) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="نسبت ارزش معاملات هفته به ماه">نسبت ارزش معاملات هفته به ماه
              </td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:style="[ (value_table.bval_average_7_day / value_table.bval_average_30_day)<1 ?
                   {'color' : 'red'} : (value_table.bval_average_7_day / value_table.bval_average_30_day)<1.99 ?
                    {'color' : 'green'} : {'color' : 'blue'} ]"
                  v-bind:title="[[ simpleNumberSeparator(value_table.bval_average_7_day / value_table.bval_average_30_day) ]]">
                [[ numberConvertToMillion(value_table.bval_average_7_day / value_table.bval_average_30_day) ]]
              </td>
            </tr>
            <tr class="even">
              <td class="text-right fw-bold" title="نسبت ارزش معاملات هفته به 3 ماه">نسبت ارزش معاملات هفته به 3 ماه
              </td>
              <td class="text-start fw-bold" dir="ltr"
                  v-bind:style="[ (value_table.bval_average_7_day / value_table.bval_average_90_day)<1 ?
                   {'color' : 'red'} : (value_table.bval_average_7_day / value_table.bval_average_90_day)<1.99 ?
                    {'color' : 'green'} : {'color' : 'blue'} ]"
                  v-bind:title="[[ simpleNumberSeparator(value_table.bval_average_7_day / value_table.bval_average_90_day) ]]">
                [[ numberConvertToMillion(value_table.bval_average_7_day / value_table.bval_average_90_day) ]]
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
    <div class="row">
      <div class="col-12 p-1">
        <div class="card text-center h-100">
          <div class="mx-2 py-4">
            <div class="col-12">
              <div class="row">
                <div class="col-4" style="text-align: right;">
                  <b>[[simpleNumberSeparator(price_information.tmax)]]</b></div>
                <div class="col-4" style="text-align: center;">
                  <b>[[simpleNumberSeparator(price_information.py)]]</b></div>
                <div class="col-4" style="text-align: left;">
                  <b>[[simpleNumberSeparator(price_information.tmin)]]</b></div>
              </div>
            </div>
            <div class="slider" id="slider-distance">
                  <span id="price_label" class="p-1 color-white"
                        style="position:absolute;bottom:20px;background-color:#6B92D5;font-weight: bold;display:none">(%[[ mouse_hover_pcp ]]) [[ mouse_hover_price ]]</span>
              <div>
                <div class="inverse-left" style="width:100%;"></div>
                <div class="range_danger"
                     v-bind:style="'left:'+range_point_calc(price_information.pmin)+'%;right:50%;'"></div>
                <div class="range_success"
                     v-bind:style="'left:50%;right:'+(100-range_point_calc(price_information.pmax))+'%;'"></div>
                <div class="sign_up" v-bind:style="'left:'+range_point_calc(price_information.pc)+'%;'"></div>
                <div class="sign_down" v-bind:style="'left:'+range_point_calc(price_information.pl)+'%;'"></div>
                <div @mouseover="showPriceLabel(true)"
                     @mouseleave="showPriceLabel(false)"
                     @mousemove="hoverReturnPosition($event)" style="width:100%;right: unset;left: unset;">
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="--bs-gutter-x: 0;">
            <table class="col mx-1" style="height: fit-content">
              <thead style="color: #6c757d;font-size: 13px;font-weight: bold">
              <tr style="border-top-width: 2px;border-bottom-width: 2px;border-color: white;">
                <th>تعداد</th>
                <th>حجم</th>
                <th>قیمت</th>
              </tr>

              </thead>
              <tbody>
              <tr v-for="record in $root.$data.positive_orders"
                  v-bind:style="'background: linear-gradient(to right, #8ddfc4 '
                    + (record.qd/$root.$data.orders_highest_volume)*100
                    +'%, white 0%);'" style="border-top-width: 4px;border-bottom-width: 4px;border-color: white;">
                <td class="fw-bold">[[ simpleNumberSeparator(record.zd) ]]</td>
                <td class="fw-bold">[[ simpleNumberSeparator(record.qd) ]]</td>
                <td class="fw-bold tooltip-container">
                [[ simpleNumberSeparator(record.pd) ]]
                  <span class="tooltip-text-right"
                   v-bind:style="[ ((record.pd/price_information.py)-1)*100<0 ? {'color' : '#eda8a5'} : {'color' : '#8ddfc4'} ]" 
                   dir="ltr">[[ numberConvertToMillion(((record.pd/price_information.py)-1)*100,2) ]]%</span>
                </td>
              </tr>
              </tbody>
            </table>
            <table class="col mx-1" style="height: fit-content">
              <thead style="color: #6c757d;font-size: 13px;font-weight: bold">
              <tr style="border-top-width: 2px;border-bottom-width: 2px;border-color: white;">
                <th>قیمت</th>
                <th>حجم</th>
                <th>تعداد</th>
              </tr>
              </thead>
              <tbody style="color: #212529;font-size: .75rem;font-weight: 500;">
              <tr v-for="record in $root.$data.negative_orders"
                  v-bind:style="'background: linear-gradient(to left, #eda8a5 '
                    + (record.qo/$root.$data.orders_highest_volume)*100
                    +'%, white 0%);'" style="border-top-width: 4px;border-bottom-width: 4px;border-color: white;">
                <td class="fw-bold tooltip-container">
                [[ simpleNumberSeparator(record.po) ]]
                  <span class="tooltip-text-left"
                  v-bind:style="[ ((record.po/price_information.py)-1)*100<0 ? {'color' : '#eda8a5'} : {'color' : '#8ddfc4'} ]" 
                  dir="ltr">[[ numberConvertToMillion(((record.po/price_information.py)-1)*100,2) ]]%</span>
                </td>
                <td class="fw-bold">[[ simpleNumberSeparator(record.qo) ]]</td>
                <td class="fw-bold">[[ simpleNumberSeparator(record.zo) ]]</td>
              </tr>
              </tbody>
            </table>
          </div>
          <h6 class="my-3 fw-bold">اطلاعات حقیقی و حقوقی</h6>
          <div class="col mt-1">
            <div class="row">
              <div class="col-6">
                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.buy_count_i) ]]">
                        <b>[[ simpleNumberSeparator($root.$data.buy_count_i) ]]</b></span>
              </div>
              <div class="col-6">
                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.sell_count_i) ]]">
                        <b>[[ simpleNumberSeparator($root.$data.sell_count_i) ]]</b></span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row px-3" style="--bs-gutter-x:unset">
              <div class="col">
                <div class="row">
                  <div class="progress p-0 justify-content-end" style="border-radius: 20px; height:10px">
                    <div class="progress-bar bg-success" role="progressbar"
                         :style="'border-radius: 20px;width: '+ $root.$data.real_buy_percentage +'%;'"></div>
                  </div>
                </div>
              </div>

              <div class="col-auto"><b style="color: black; background-color: white;" title="حقیقی">حقیقی</b>
              </div>
              <div class="col">
                <div class="row" style="--bs-gutter-x:unset">
                  <div class="progress p-0" style="border-radius: 20px; height:10px">
                    <div class="progress-bar bg-danger" role="progressbar"
                         :style="'border-radius: 20px;width: '+ $root.$data.real_sell_percentage +'%;'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-6">
                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.buy_i_volume) ]]">
                        <b> (%[[ $root.$data.real_buy_percentage ]]) [[ numberConvertToMillion($root.$data.buy_i_volume) ]]</b></span>
              </div>
              <div class="col-6">
                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.sell_i_volume) ]]">
                        <b> (%[[ $root.$data.real_sell_percentage ]]) [[ numberConvertToMillion($root.$data.sell_i_volume) ]]</b></span>
              </div>
            </div>
          </div>
          <div class="col mt-1">
            <div class="row">
              <div class="col-6">
                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.buy_count_n) ]]">
                        <b>[[ simpleNumberSeparator($root.$data.buy_count_n) ]]</b></span>
              </div>
              <div class="col-6">
                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.sell_count_n) ]]">
                        <b>[[ simpleNumberSeparator($root.$data.sell_count_n) ]]</b></span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row px-3" style="--bs-gutter-x:unset">
              <div class="col">
                <div class="row">
                  <div class="progress p-0 justify-content-end" style="border-radius: 20px; height:10px">
                    <div class="progress-bar bg-success" role="progressbar"
                         :style="'border-radius: 20px;width: '+ $root.$data.legal_buy_percentage +'%;'"></div>
                  </div>
                </div>
              </div>
              <div class="col-auto" title="حقوقی"><b style="color: black; background-color: white;">حقوقی</b>
              </div>
              <div class="col">
                <div class="row" style="--bs-gutter-x:unset">
                  <div class="progress p-0" style="border-radius: 20px; height:10px">
                    <div class="progress-bar bg-danger" role="progressbar"
                         :style="'border-radius: 20px;width: '+ $root.$data.legal_sell_percentage +'%;'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-6">
                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.buy_n_volume) ]]">
                        <b> (%[[ $root.$data.legal_buy_percentage ]]) [[ numberConvertToMillion($root.$data.buy_n_volume) ]]</b></span>
              </div>
              <div class="col-6">
                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.sell_n_volume) ]]">
                        <b> (%[[ $root.$data.legal_sell_percentage ]]) [[ numberConvertToMillion($root.$data.sell_n_volume) ]]</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col col-12 col-lg-6 col-xl-4 p-1">
    <div class="card h-100">
      <a class="mdi mdi-window-maximize maximize-button"></a>
      <a class="mdi mdi-window-minimize minimize-button"></a>
      <div class="row m-0">
        <div class="col-12 col-md-12 border text-center px-0 py-2" style="height:auto;color: #00b500">
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="performance_chart_data_update(1,true)">
            <b>امروز</b>
          </button>
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="performance_chart_data_update(7,false)">
            <b>1 هفته</b>
          </button>
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="performance_chart_data_update(30,false)">
            <b>1 ماهه</b>
          </button>
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="performance_chart_data_update(90,false)">
            <b>3 ماهه</b>
          </button>
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="performance_chart_data_update(180,false)">
            <b>6 ماهه</b>
          </button>
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="performance_chart_data_update(365,false)">
            <b>1 ساله</b>
          </button>
        </div>
        <div class="col-12">
          <canvas id="performance_canvas" width="200" class="py-2"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="col col-sm-12 col-md-12 col-lg-6 col-xl-4 p-1">
    <div class="card">
      <a class="mdi mdi-window-maximize maximize-button"></a>
      <a class="mdi mdi-window-minimize minimize-button"></a>
      <div class="px-2">
        <b class="row text-center py-2 h6 fw-bold" title="نرخ رشد">
          نرخ رشد [[ $root.$data.symbol ]]</b>
        <table class="table table-hover">
          <tbody class="align-middle">
          <tr class="even">
            <td class="text-right fw-bold" title="رشد سود خالص نسبت به فصل قبل">رشد سود خالص نسبت به فصل قبل</td>
            <td class="text-start fw-bold"
                v-bind:style="'color :' +[ calculate_profit(session_growth_rate.session_growth_rate_1, session_growth_rate.session_growth_rate_2).color ]">
                     <span dir="ltr">
                     [[ calculate_profit(session_growth_rate.session_growth_rate_1, session_growth_rate.session_growth_rate_2).percentage  ]]%</span>
              [[ calculate_profit(session_growth_rate.session_growth_rate_1,
              session_growth_rate.session_growth_rate_2).text ]] خالص
            </td>
          </tr>
          <tr class="even">
            <td class="text-right fw-bold" title="رشد سود خالص نسبت به فصل مشابه">رشد سود خالص نسبت به فصل مشابه</td>
            <td class="text-start fw-bold"
                v-bind:style="'color :' +[ calculate_profit(session_growth_rate.session_growth_rate_1, session_growth_rate.session_growth_rate_5).color ]">
              <span dir="ltr">[[ calculate_profit(session_growth_rate.session_growth_rate_1, session_growth_rate.session_growth_rate_5).percentage ]]%</span>
              [[ calculate_profit(session_growth_rate.session_growth_rate_1,
              session_growth_rate.session_growth_rate_5).text ]] خالص
            </td>
          </tr>
          <tr class="even">
            <td class="text-right fw-bold" title="رشد سود عملیاتی نسبت به فصل قبل">رشد سود عملیاتی نسبت به فصل قبل
            </td>
            <td class="text-start fw-bold"
                v-bind:style="'color :' +[ calculate_profit(session_growth_rate.session_growth_rate_3, session_growth_rate.session_growth_rate_4).color ]">
              <span dir="ltr">[[ calculate_profit(session_growth_rate.session_growth_rate_3, session_growth_rate.session_growth_rate_4).percentage ]]%</span>
              [[ calculate_profit(session_growth_rate.session_growth_rate_3,
              session_growth_rate.session_growth_rate_4).text ]] عملیاتی
            </td>
          </tr>
          <tr class="even">
            <td class="text-right fw-bold" title="رشد سود عملیاتی نسبت به فصل مشابه">رشد سود عملیاتی نسبت به فصل
              مشابه
            </td>
            <td class="text-start fw-bold"
                v-bind:style="'color :' +[ calculate_profit(session_growth_rate.session_growth_rate_3, session_growth_rate.session_growth_rate_6).color ]">
              <span dir="ltr">[[ calculate_profit(session_growth_rate.session_growth_rate_3, session_growth_rate.session_growth_rate_6).percentage ]]%</span>
              [[ calculate_profit(session_growth_rate.session_growth_rate_3,
              session_growth_rate.session_growth_rate_4).text ]] عملیاتی
            </td>
          </tr>
          <tr class="even">
            <td class="text-right fw-bold" title="رشد درآمد نسبت به ماه قبل">رشد درآمد نسبت به ماه قبل
            </td>
            <td class="text-start fw-bold"
                v-bind:style="[ session_growth_rate.session_growth_rate_11 < 0 ?
                     {'color' : 'red'} : {'color' : 'green'} ]">
              <span dir="ltr">[[ session_growth_rate.session_growth_rate_11 ]]%</span>
              [[ session_growth_rate.session_growth_rate_11 > 0 ? 'رشد' : 'کاهش' ]] درآمد
            </td>
          </tr>
          <tr class="even">
            <td class="text-right fw-bold" title="رشد درآمد نسبت به ماه مشابه سال قبل">رشد درآمد نسبت به ماه مشابه سال
              قبل
            </td>
            <td class="text-start fw-bold"
                v-bind:style="[ session_growth_rate.session_growth_rate_10 < 0 ?
                     {'color' : 'red'} : {'color' : 'green'} ]">
              <span dir="ltr">[[ session_growth_rate.session_growth_rate_10 ]]%</span>
              [[ session_growth_rate.session_growth_rate_10 > 0 ? 'رشد' : 'کاهش' ]] درآمد
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
    <div class="card">
      <div class="row">
        <div class="col-6">
          <div class="text-center py-2">
            <span class="mt-2 mx-1 text-truncate" title="بازده"><b>بازده [[ $root.$data.symbol ]]</b></span>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency($root.$data.efficiency_one_week).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency($root.$data.efficiency_one_week).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="$root.$data.efficiency_one_week + '%'">%[[ $root.$data.efficiency_one_week ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="یک هفته">یک هفته</b>
            </div>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency($root.$data.efficiency_one_month).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency($root.$data.efficiency_one_month).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="$root.$data.efficiency_one_month + '%'">%[[ $root.$data.efficiency_one_month ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="یک ماهه">یک ماهه</b>
            </div>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency($root.$data.efficiency_three_month).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency($root.$data.efficiency_three_month).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="$root.$data.efficiency_three_month + '%'">%[[ $root.$data.efficiency_three_month ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="سه ماهه">سه ماهه</b>
            </div>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency($root.$data.efficiency_one_year).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency($root.$data.efficiency_one_year).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="$root.$data.efficiency_one_year + '%'">%[[ $root.$data.efficiency_one_year ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="یک ساله">یک ساله</b>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="text-center py-2">
            <b class="text-center py-2" title="بازدهی صنعت">بازدهی صنعت</b>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency(industry_efficiency.efficiency_one_week).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency(industry_efficiency.efficiency_one_week).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="industry_efficiency.efficiency_one_week + '%'">%[[ industry_efficiency.efficiency_one_week ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="یک هفته">یک هفته</b>
            </div>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency(industry_efficiency.efficiency_one_month).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency(industry_efficiency.efficiency_one_month).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="industry_efficiency.efficiency_one_month + '%'">%[[ industry_efficiency.efficiency_one_month ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="یک ماهه">یک ماهه</b>
            </div>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency(industry_efficiency.efficiency_three_month).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency(industry_efficiency.efficiency_three_month).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="industry_efficiency.efficiency_three_month + '%'">%[[ industry_efficiency.efficiency_three_month ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="سه ماهه">سه ماهه</b>
            </div>
          </div>
          <div class="row col-12 mx-0 mt-2">
            <div class="col px-1">
              <div class="progress position-relative" style="border-radius: 20px;">
                <div class="progress-bar" v-bind:class="get_efficiency(industry_efficiency.efficiency_one_year).color"
                     role="progressbar"
                     :style="'border-radius: 20px;width: '+ get_efficiency(industry_efficiency.efficiency_one_year).num +'%;'">
                  <span class="position-absolute w-100" style="color: black"
                        v-bind:title="industry_efficiency.efficiency_one_year + '%'">%[[ industry_efficiency.efficiency_one_year ]]</span>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <b style="color: black" title="یک ساله">یک ساله</b>
            </div>
          </div>
<!--          <table class="table table-hover">-->
<!--            <tbody class="align-middle">-->
<!--            <tr class="even">-->
<!--              <td class="text-right" title="1 هفته">1 هفته</td>-->
<!--              <td class="text-start">[[ industry_efficiency.efficiency_one_week ]]</td>-->
<!--            </tr>-->
<!--            <tr class="even">-->
<!--              <td class="text-right" title="1 ماه">1 ماه</td>-->
<!--              <td style="text-align: left ;font-size: 14px">[[ industry_efficiency.efficiency_one_month ]]</td>-->
<!--            </tr>-->
<!--            <tr class="even">-->
<!--              <td class="text-right" title="3 ماه">3 ماه</td>-->
<!--              <td class="text-start">[[ industry_efficiency.efficiency_three_month ]]</td>-->
<!--            </tr>-->
<!--            <tr class="even">-->
<!--              <td class="text-right" title="1 سال">1 سال</td>-->
<!--              <td class="text-start">[[ industry_efficiency.efficiency_one_year ]]</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </table>-->
        </div>
      </div>

    </div>

  </div>
  <div class="col col-sm-12 col-md-12 col-lg-6 col-xl-4 p-1">
    <div class="card text-start h-100">
      <a class="mdi mdi-window-maximize maximize-button"></a>
      <a class="mdi mdi-window-minimize minimize-button"></a>
      <div class="px-2" style="width: 100%; height: 100%; ">
        <canvas id="per_capita_real_canvas" dir="ltr"></canvas>
      </div>
    </div>
  </div>
  <div class="col col-12 col-lg-6 col-xl-4 p-1">
    <div class="card h-100">
      <a class="mdi mdi-window-maximize maximize-button"></a>
      <a class="mdi mdi-window-minimize minimize-button"></a>
      <div class="row m-0">
        <div class="col-12 col-md-12 border text-center px-0 py-2" style="height:auto;color: #00b500">
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="legal_real_history_chart_data(1)">
            <b>روزانه</b>
          </button>
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="legal_real_history_chart_data(7)">
            <b>هفتگی</b>
          </button>
          <button class="mt-2 mx-1 text-truncate btn btn-light p-0" v-on:click="legal_real_history_chart_data(30)">
            <b>ماهانه</b>
          </button>
        </div>
        <div class="col-12">
          <canvas id="legal_real_history_canvas" width="200" class="py-2"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="col col-sm-12 col-md-12 col-lg-6 col-xl-4 p-1">
    <div class="card text-start h-100">
      <a class="mdi mdi-window-maximize maximize-button"></a>
      <a class="mdi mdi-window-minimize minimize-button"></a>
      <div class="px-2" style="width: 100%; height: 100% ">
        <canvas id="monthly_sales_history_canvas"></canvas>
      </div>
    </div>
  </div>
  
  <!--      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">-->
  <!--        <div class="row">-->
  <!--          <div class="col-12 p-1">-->
  <!--            <div class="card text-center h-100">-->
  <!--            <div class="mx-2 py-4">-->
  <!--                <div class="col-12">-->
  <!--                  <div class="row">-->
  <!--                    <div class="col-4" style="text-align: right;">-->
  <!--                      <b>[[simpleNumberSeparator(price_information.tmax)]]</b></div>-->
  <!--                    <div class="col-4" style="text-align: center;">-->
  <!--                      <b>[[simpleNumberSeparator(price_information.py)]]</b></div>-->
  <!--                    <div class="col-4" style="text-align: left;">-->
  <!--                      <b>[[simpleNumberSeparator(price_information.tmin)]]</b></div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--                <div class="slider" id="slider-distance">-->
  <!--                  <span id="price_label" class="p-1 color-white"-->
  <!--                        style="position:absolute;bottom:20px;background-color:#6B92D5;font-weight: bold;display:none">(%[[ mouse_hover_pcp ]]) [[ mouse_hover_price ]]</span>-->
  <!--                  <div>-->
  <!--                    <div class="inverse-left" style="width:100%;"></div>-->
  <!--                    <div class="range_danger"-->
  <!--                         v-bind:style="'left:'+range_point_calc(price_information.pmin)+'%;right:50%;'"></div>-->
  <!--                    <div class="range_success"-->
  <!--                         v-bind:style="'left:50%;right:'+(100-range_point_calc(price_information.pmax))+'%;'"></div>-->
  <!--                    <div class="sign_up" v-bind:style="'left:'+range_point_calc(price_information.pc)+'%;'"></div>-->
  <!--                    <div class="sign_down" v-bind:style="'left:'+range_point_calc(price_information.pl)+'%;'"></div>-->
  <!--                    <div @mouseover="showPriceLabel(true)"-->
  <!--                         @mouseleave="showPriceLabel(false)"-->
  <!--                         @mousemove="hoverReturnPosition($event)" style="width:100%;right: unset;left: unset;">-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--              <div class="row" style="&#45;&#45;bs-gutter-x: 0;">-->
  <!--                <table class="col mx-1">-->
  <!--                  <thead style="color: #6c757d;font-size: 13px;font-weight: bold">-->
  <!--                    <tr style="border-top-width: 2px;border-bottom-width: 2px;border-color: white;">-->
  <!--                      <th>تعداد</th>-->
  <!--                      <th>حجم</th>-->
  <!--                      <th>قیمت</th>-->
  <!--                    </tr>-->
  <!--                    -->
  <!--                  </thead>-->
  <!--                  <tbody>-->
  <!--                    <tr v-for="record in $root.$data.positive_orders" -->
  <!--                    v-bind:style="'background: linear-gradient(to right, #8ddfc4 '-->
  <!--                    + (record.qd/$root.$data.orders_highest_volume)*100-->
  <!--                    +'%, white 0%);'" style="border-top-width: 4px;border-bottom-width: 4px;border-color: white;">-->
  <!--                      <td class="fw-bold">[[ simpleNumberSeparator(record.zd) ]]</td>-->
  <!--                      <td class="fw-bold">[[ simpleNumberSeparator(record.qd) ]]</td>-->
  <!--                      <td class="fw-bold">[[ simpleNumberSeparator(record.pd) ]]</td>-->
  <!--                    </tr>-->
  <!--                  </tbody>-->
  <!--                </table>-->
  <!--                <table class="col mx-1">-->
  <!--                  <thead style="color: #6c757d;font-size: 13px;font-weight: bold">-->
  <!--                    <tr style="border-top-width: 2px;border-bottom-width: 2px;border-color: white;">-->
  <!--                      <th>تعداد</th>-->
  <!--                      <th>حجم</th>-->
  <!--                      <th>قیمت</th>-->
  <!--                    </tr>-->
  <!--                  </thead>-->
  <!--                  <tbody style="color: #212529;font-size: .75rem;font-weight: 500;">-->
  <!--                    <tr v-for="record in $root.$data.negative_orders"-->
  <!--                    v-bind:style="'background: linear-gradient(to left, #eda8a5 '-->
  <!--                    + (record.qo/$root.$data.orders_highest_volume)*100-->
  <!--                    +'%, white 0%);'" style="border-top-width: 4px;border-bottom-width: 4px;border-color: white;">-->
  <!--                      <td class="fw-bold">[[ simpleNumberSeparator(record.zo) ]]</td>-->
  <!--                      <td class="fw-bold">[[ simpleNumberSeparator(record.qo) ]]</td>-->
  <!--                      <td class="fw-bold">[[ simpleNumberSeparator(record.po) ]]</td>-->
  <!--                    </tr>-->
  <!--                  </tbody>-->
  <!--                </table>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="col-12 p-1">-->
  <!--            <div class="card text-center h-100">-->
  <!--              <div class="mx-2">-->
  <!--                <div class="col mt-1">-->
  <!--                  <div class="row">-->
  <!--                    <div class="col-6">-->
  <!--                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.buy_count_i) ]]">-->
  <!--                        <b>[[ simpleNumberSeparator($root.$data.buy_count_i) ]]</b></span>-->
  <!--                    </div>-->
  <!--                    <div class="col-6">-->
  <!--                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.sell_count_i) ]]">-->
  <!--                        <b>[[ simpleNumberSeparator($root.$data.sell_count_i) ]]</b></span>-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--                <div class="col">-->
  <!--                  <div class="row px-3" style="&#45;&#45;bs-gutter-x:unset">-->
  <!--                    <div class="col">-->
  <!--                      <div class="row">-->
  <!--                        <div class="progress p-0 justify-content-end" style="border-radius: 20px; height:10px">-->
  <!--                          <div class="progress-bar bg-success" role="progressbar"-->
  <!--                               :style="'border-radius: 20px;width: '+ $root.$data.real_buy_percentage +'%;'"></div>-->
  <!--                        </div>-->
  <!--                      </div>-->
  <!--                    </div>-->

  <!--                    <div class="col-auto"><b style="color: black; background-color: white;" title="حقیقی">حقیقی</b>-->
  <!--                    </div>-->
  <!--                    <div class="col">-->
  <!--                      <div class="row" style="&#45;&#45;bs-gutter-x:unset">-->
  <!--                        <div class="progress p-0" style="border-radius: 20px; height:10px">-->
  <!--                          <div class="progress-bar bg-danger" role="progressbar"-->
  <!--                               :style="'border-radius: 20px;width: '+ $root.$data.real_sell_percentage +'%;'"></div>-->
  <!--                        </div>-->
  <!--                      </div>-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--                <div class="col">-->
  <!--                  <div class="row">-->
  <!--                    <div class="col-6">-->
  <!--                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.buy_i_volume) ]]">-->
  <!--                        <b> (%[[ $root.$data.real_buy_percentage ]]) [[ numberConvertToMillion($root.$data.buy_i_volume) ]]</b></span>-->
  <!--                    </div>-->
  <!--                    <div class="col-6">-->
  <!--                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.sell_i_volume) ]]">-->
  <!--                        <b> (%[[ $root.$data.real_sell_percentage ]]) [[ numberConvertToMillion($root.$data.sell_i_volume) ]]</b></span>-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--                <div class="col mt-1">-->
  <!--                  <div class="row">-->
  <!--                    <div class="col-6">-->
  <!--                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.buy_count_n) ]]">-->
  <!--                        <b>[[ simpleNumberSeparator($root.$data.buy_count_n) ]]</b></span>-->
  <!--                    </div>-->
  <!--                    <div class="col-6">-->
  <!--                      <span v-bind:title="[[ simpleNumberSeparator($root.$data.sell_count_n) ]]">-->
  <!--                        <b>[[ simpleNumberSeparator($root.$data.sell_count_n) ]]</b></span>-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--                <div class="col">-->
  <!--                  <div class="row px-3" style="&#45;&#45;bs-gutter-x:unset">-->
  <!--                    <div class="col">-->
  <!--                      <div class="row">-->
  <!--                        <div class="progress p-0 justify-content-end" style="border-radius: 20px; height:10px">-->
  <!--                          <div class="progress-bar bg-success" role="progressbar"-->
  <!--                               :style="'border-radius: 20px;width: '+ $root.$data.legal_buy_percentage +'%;'"></div>-->
  <!--                        </div>-->
  <!--                      </div>-->
  <!--                    </div>-->
  <!--                    <div class="col-auto" title="حقوقی"><b style="color: black; background-color: white;">حقوقی</b>-->
  <!--                    </div>-->
  <!--                    <div class="col">-->
  <!--                      <div class="row" style="&#45;&#45;bs-gutter-x:unset">-->
  <!--                        <div class="progress p-0" style="border-radius: 20px; height:10px">-->
  <!--                          <div class="progress-bar bg-danger" role="progressbar"-->
  <!--                               :style="'border-radius: 20px;width: '+ $root.$data.legal_sell_percentage +'%;'"></div>-->
  <!--                        </div>-->
  <!--                      </div>-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--                <div class="col">-->
  <!--                  <div class="row">-->
  <!--                    <div class="col-6">-->
  <!--                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.buy_n_volume) ]]">-->
  <!--                        <b> (%[[ $root.$data.legal_buy_percentage ]]) [[ numberConvertToMillion($root.$data.buy_n_volume) ]]</b></span>-->
  <!--                    </div>-->
  <!--                    <div class="col-6">-->
  <!--                      <span dir="ltr" v-bind:title="[[ simpleNumberSeparator($root.$data.sell_n_volume) ]]">-->
  <!--                        <b> (%[[ $root.$data.legal_sell_percentage ]]) [[ numberConvertToMillion($root.$data.sell_n_volume) ]]</b></span>-->
  <!--                    </div>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="col-6 p-1">-->
  <!--            <div class="card text-center px-2">-->
  <!--              <p class="mt-2 mx-1 text-truncate fw-bold" title="سرانه خرید حقیقی">سرانه خرید حقیقی</p>-->
  <!--              <span dir="ltr" v-bind:title="[[ simpleNumberSeparator(legal_real_information.per_capita_real_buy) ]]">-->
  <!--                [[ numberConvertToMillion(legal_real_information.per_capita_real_buy) ]]</span>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="col-6 p-1">-->
  <!--            <div class="card text-center px-2">-->
  <!--              <p class="mt-2 mx-1 text-truncate fw-bold" title="سرانه فروش حقیقی">سرانه فروش حقیقی</p>-->
  <!--              <span dir="ltr" v-bind:title="[[ simpleNumberSeparator(legal_real_information.per_capita_real_sell) ]]">-->
  <!--                [[ numberConvertToMillion(legal_real_information.per_capita_real_sell) ]]</span>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="col-6 p-1">-->
  <!--            <div class="card text-center px-2">-->
  <!--              <p class="mt-2 mx-1 text-truncate fw-bold" title="خالص خرید های حقیقی">خالص خرید های حقیقی</p>-->
  <!--              <span dir="ltr" v-bind:title="[[ simpleNumberSeparator(legal_real_information.net_real_buy) ]]">-->
  <!--                [[ numberConvertToMillion(legal_real_information.net_real_buy) ]]</span>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="col-6 p-1">-->
  <!--            <div class="card text-center px-2">-->
  <!--              <p class="mt-2 mx-1 text-truncate fw-bold" title="خالص خرید های حقوقی">خالص خرید های حقوقی</p>-->
  <!--              <span dir="ltr" v-bind:title="[[ simpleNumberSeparator(legal_real_information.net_legal_buy) ]]">-->
  <!--                [[ numberConvertToMillion(legal_real_information.net_legal_buy) ]]</span>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->

  <div class="col col-sm-12 col-md-12 col-lg-6 col-xl-4">
    <div class="row">
      <div class="col" style="padding: .2rem">
        <div class="card text-start h-100">
          <a class="mdi mdi-window-maximize maximize-button"></a>
          <a class="mdi mdi-window-minimize minimize-button"></a>
          <div class="px-2" style="width: 100%; height: 100% ">
            <canvas id="session_profit_canvas"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col col-sm-12 col-md-12 col-lg-6 col-xl-4 p-1">
    <div class="card text-start h-100">
      <a class="mdi mdi-window-maximize maximize-button"></a>
      <a class="mdi mdi-window-minimize minimize-button"></a>
      <div class="px-2" style="width: 100%; height: 100% ">
        <canvas id="seasonally_profit_canvas"></canvas>
      </div>
    </div>
  </div>
</div>

    `,
  delimiters: ["[[", "]]"],
  // props: [
  //   'exchange_tse_code',
  //   'exchange_prohibited',
  //   'exchange_closed',
  //   'information_socket',
  //   'efficiency_one_week',
  //   'efficiency_one_month',
  //   'efficiency_three_month',
  //   'efficiency_one_year',
  //   'data_list',
  //   'buy_i_volume',
  //   'sell_i_volume',
  //   'buy_n_volume',
  //   'sell_n_volume',
  //   'legal_buy_percentage',
  //   'legal_sell_percentage',
  //   'real_sell_percentage',
  //   'real_buy_percentage',
  //   'buy_count_n',
  //   'sell_count_n',
  //   'sell_count_i',
  //   'buy_count_i',
  //   'symbol',
  //   'symbol_full_name',
  //   'group_name',
  //   'market_name',
  //   'last_price',
  //   'close_price',
  //   'week_entry_legal_money',
  //   'month_entry_legal_money',
  //   'pl_average_50_day',
  //   'pl_average_100_day',
  //   'eps',
  //   'dps',
  //   'pe',
  //   'group_pe',
  //   'code_info',
  // ],
  data() {
    return {
      volume_table: this.$root.$data.volume_table,
      value_table: this.$root.$data.value_table,
      session_growth_rate: this.$root.$data.session_growth_rate,
      legal_real_information: this.$root.$data.legal_real_information,
      price_information: this.$root.$data.price_information,
      bazdehi_borse: this.$root.$data.bazdehi_borse,
      day_statistics: this.$root.$data.day_statistics,
      industry_efficiency: this.$root.$data.industry_efficiency,
      mouse_hover_price: 0,
      mouse_hover_pcp: 0,
    };
  },
  methods: {
    numberConvertToMillion: function (data, decimal_number = 1) {
      return numberConvertToMillion(data, decimal_number);
    },
    simpleNumberSeparator: function (data) {
      return simpleNumberSeparator(data);
    },
    get_efficiency: function (data) {
      return {
        color: data > 0 ? "bg-success" : "bg-danger",
        num: Math.abs(data),
      };
    },
    // legal_sales_data: function (data) {
    //   app_symbol_view.$data.information_socket.send(JSON.stringify({
    //     'method': "legal_real_history_chart_data",
    //     'kwargs': {
    //       'days': data,
    //       'exchange_number': this.$root.$data.exchange_tse_code,
    //     }
    //   }))
    // },
    range_point_calc(point_number) {
      return (
        ((point_number - this.price_information.tmin) /
          (this.price_information.tmax - this.price_information.tmin)) *
        100
      );
    },
    hoverReturnPosition(event) {
      document.getElementById("price_label").style.left = event.offsetX + "px";
      this.mouse_hover_price = (
        this.price_information.tmin +
        (this.price_information.tmax - this.price_information.tmin) *
          (event.offsetX / event.target.clientWidth)
      ).toFixed(0);
      this.mouse_hover_pcp = (
        (this.mouse_hover_price / this.price_information.py - 1) *
        100
      ).toFixed(2);
    },
    showPriceLabel(show) {
      if (show == true) {
        document.getElementById("price_label").style.display = "block";
      } else {
        document.getElementById("price_label").style.display = "None";
      }
    },
    socket_ready() {
      setTimeout(
        function () {
          this.$root.$data.information_socket.send(
            JSON.stringify({
              method: "check_read_permission",
              kwargs: {},
            })
          );
        }.bind(this),
        10000
      );

      // this.$root.$data.information_socket.send(JSON.stringify({
      //   'method': "monthly_sales_history_chart_data",
      //   'kwargs': {
      //     'exchange_number': this.$root.$data.exchange_tse_code
      //   }
      // }))
      // this.$root.$data.information_socket.send(JSON.stringify({
      //   'method': "seasonal_profit_chart_data",
      //   'kwargs': {
      //     'exchange_number': this.$root.$data.exchange_tse_code
      //   }
      // }))
      // this.$root.$data.information_socket.send(JSON.stringify({
      //   'method': "legal_real_history_chart_data",
      //   'kwargs': {
      //     'days': 1,
      //     'exchange_number': this.$root.$data.exchange_tse_code
      //   }
      // }))
      // this.$root.$data.information_socket.send(JSON.stringify({
      //   'method': "capitation_real_chart_data",
      //   'kwargs': {
      //     'exchange_number': this.$root.$data.exchange_tse_code
      //   }
      // }))
      this.$root.$data.information_socket.send(
        JSON.stringify({
          method: "cards_data",
          kwargs: {
            exchange_number: this.$root.$data.exchange_tse_code,
          },
        })
      );

      // this.$root.$data.information_socket.send(JSON.stringify({
      //   'method': "get_efficiency_data",
      //   'kwargs': {
      //     'exchange_number': this.$root.$data.exchange_tse_code
      //   }
      // }))

      // this.$root.$data.information_socket.send(JSON.stringify({
      //   'method': "get_industry_efficiency_data",
      //   'kwargs': {
      //     'exchange_number': this.$root.$data.exchange_tse_code
      //   }
      // }))

      this.$root.$data.information_socket.send(
        JSON.stringify({
          method: "get_pass_symbol_data",
          kwargs: {
            exchange_number: this.$root.$data.exchange_tse_code,
          },
        })
      );

      this.$root.$data.information_socket.send(
        JSON.stringify({
          method: "get_session_growth_rate_data",
          kwargs: {
            exchange_number: this.$root.$data.exchange_tse_code,
          },
        })
      );
    },
    calculate_profit: function (num1, num2) {
      var color = "green";
      var text = "";
      if (num1 < 0 && num2 < 0 && num1 < num2) {
        text = "افزایش زیان";
        color = "red";
      } else if (num1 < 0 && num2 < 0 && num1 > num2) {
        text = "کاهش زیان";
        color = "green";
      } else if ((num1 / num2 - 1) * 100 < 0) {
        text = "کاهش سود";
        color = "red";
      } else {
        text = "افزایش سود";
        color = "green";
      }
      return {
        color: color,
        percentage: Math.abs((num1 / num2 - 1) * 100).toFixed(1),
        text: text,
      };
    },
    performance_chart_data_update(days, daily_active) {
      app_symbol_view.$data.daily_active = daily_active;
      $.ajax(
        this.$root.$data.general_info_urls.get_exchange_performance_chart_data,
        {
          headers: {
            Authorization: "Bearer " + this.$root.$data.user_access,
            "Content-Type": "application/json",
          },
          dataType: "json", // type of response data
          timeout: 30 * 1000, // timeout milliseconds
          data: {
            days: days,
            exchange_number: this.$root.$data.exchange_tse_code,
          },
          success: function (data, status, xhr) {
            // success callback function
            performance_chart.data.datasets = data.datasets;
            performance_chart.data.labels = data.labels;
            performance_chart.update();
          }.bind(this),
          error: function (jqXhr, textStatus, errorMessage) {
            // error callback
            console.log("fail to get get-seasonally-profit-chart-data");
            console.log(errorMessage);
          },
        }
      );
    },
    per_capita_real_chart_update() {
      $.ajax(
        this.$root.$data.general_info_urls.get_capitation_real_chart_data,
        {
          headers: {
            Authorization: "Bearer " + this.$root.$data.user_access,
            "Content-Type": "application/json",
          },
          dataType: "json", // type of response data
          timeout: 30 * 1000, // timeout milliseconds
          data: {
            exchange_number: this.$root.$data.exchange_tse_code,
          },
          success: function (data, status, xhr) {
            // success callback function
            per_capita_real_chart.data.datasets = data.datasets;
            per_capita_real_chart.data.labels = data.labels;
            per_capita_real_chart.update();
          }.bind(this),
          error: function (jqXhr, textStatus, errorMessage) {
            // error callback
            console.log("fail to get get-seasonally-profit-chart-data");
            console.log(errorMessage);
          },
        }
      );
    },

    seasonally_profit_chart_data_update() {
      $.ajax(
        this.$root.$data.general_info_urls.get_seasonally_profit_chart_data,
        {
          headers: {
            Authorization: "Bearer " + this.$root.$data.user_access,
            "Content-Type": "application/json",
          },
          dataType: "json", // type of response data
          timeout: 30 * 1000, // timeout milliseconds
          data: {
            exchange_number: this.$root.$data.exchange_tse_code,
          },
          success: function (data, status, xhr) {
            // success callback function
            seasonally_profit_chart.data.datasets = data.datasets;
            seasonally_profit_chart.data.labels = data.labels;
            seasonally_profit_chart.update();
          }.bind(this),
          error: function (jqXhr, textStatus, errorMessage) {
            // error callback
            console.log("fail to get get-seasonally-profit-chart-data");
            console.log(errorMessage);
          },
        }
      );
    },

    monthly_sales_history_chart_update() {
      $.ajax(
        this.$root.$data.general_info_urls.get_monthly_sale_history_chart_data,
        {
          headers: {
            Authorization: "Bearer " + this.$root.$data.user_access,
            "Content-Type": "application/json",
          },
          dataType: "json", // type of response data
          timeout: 30 * 1000, // timeout milliseconds
          data: {
            exchange_number: this.$root.$data.exchange_tse_code,
          },
          success: function (data, status, xhr) {
            // success callback function
            monthly_sales_history_chart.data.datasets = data.datasets;
            monthly_sales_history_chart.data.labels = data.labels;
            monthly_sales_history_chart.update();
          }.bind(this),
          error: function (jqXhr, textStatus, errorMessage) {
            // error callback
            console.log("fail to get get_monthly_sale_history_chart_data");
            console.log(errorMessage);
          },
        }
      );
    },
    seasonal_profit_chart_update() {
      $.ajax(
        this.$root.$data.general_info_urls.get_seasonal_profit_chart_data,
        {
          headers: {
            Authorization: "Bearer " + this.$root.$data.user_access,
            "Content-Type": "application/json",
          },
          dataType: "json", // type of response data
          timeout: 30 * 1000, // timeout milliseconds
          data: {
            exchange_number: this.$root.$data.exchange_tse_code,
          },
          success: function (data, status, xhr) {
            // success callback function
            session_profit_chart.data.datasets = data.datasets;
            session_profit_chart.data.labels = data.labels;
            session_profit_chart.update();
          }.bind(this),
          error: function (jqXhr, textStatus, errorMessage) {
            // error callback
            console.log("fail to get get_monthly_sale_history_chart_data");
            console.log(errorMessage);
          },
        }
      );
    },
    legal_real_history_chart_data(days) {
      $.ajax(
        this.$root.$data.general_info_urls.get_legal_sale_history_chart_data,
        {
          headers: {
            Authorization: "Bearer " + this.$root.$data.user_access,
            "Content-Type": "application/json",
          },
          dataType: "json", // type of response data
          timeout: 30 * 1000, // timeout milliseconds
          data: {
            days: days,
            exchange_number: this.$root.$data.exchange_tse_code,
          },
          success: function (data, status, xhr) {
            // success callback function
            legal_real_history_chart.data.datasets = data.datasets;
            legal_real_history_chart.data.labels = data.labels;
            legal_real_history_chart.update();
          }.bind(this),
          error: function (jqXhr, textStatus, errorMessage) {
            // error callback
            console.log("fail to get get_monthly_sale_history_chart_data");
            console.log(errorMessage);
          },
        }
      );
    },
    industry_efficiency_data_update() {
      $.ajax(this.$root.$data.general_info_urls.get_industry_efficiency, {
        headers: {
          Authorization: "Bearer " + this.$root.$data.user_access,
          "Content-Type": "application/json",
        },
        dataType: "json", // type of response data
        timeout: 30 * 1000, // timeout milliseconds
        data: {
          exchange_number: this.$root.$data.exchange_tse_code,
        },
        success: function (data, status, xhr) {
          // success callback function
          this.$root.$data.industry_efficiency.efficiency_one_week =
            data.efficiency_one_week.toFixed(1);
          this.$root.$data.industry_efficiency.efficiency_one_month =
            data.efficiency_one_month.toFixed(1);
          this.$root.$data.industry_efficiency.efficiency_three_month =
            data.efficiency_three_month.toFixed(1);
          this.$root.$data.industry_efficiency.efficiency_one_year =
            data.efficiency_one_year.toFixed(1);
        }.bind(this),
        error: function (jqXhr, textStatus, errorMessage) {
          // error callback
          console.log("fail to get get_monthly_sale_history_chart_data");
          console.log(errorMessage);
        },
      });
    },
    efficiency_data_update(data) {
      $.ajax(this.$root.$data.general_info_urls.get_exchange_efficiency, {
        headers: {
          Authorization: "Bearer " + this.$root.$data.user_access,
          "Content-Type": "application/json",
        },
        dataType: "json", // type of response data
        timeout: 30 * 1000, // timeout milliseconds
        data: {
          exchange_number: this.$root.$data.exchange_tse_code,
        },
        success: function (data, status, xhr) {
          // success callback function
          this.$root.$data.efficiency_one_week =
            data.efficiency_one_week.toFixed(1);
          this.$root.$data.efficiency_one_month =
            data.efficiency_one_month.toFixed(1);
          this.$root.$data.efficiency_three_month =
            data.efficiency_three_month.toFixed(1);
          this.$root.$data.efficiency_one_year =
            data.efficiency_one_year.toFixed(1);
        }.bind(this),
        error: function (jqXhr, textStatus, errorMessage) {
          // error callback
          console.log("fail to get get_monthly_sale_history_chart_data");
          console.log(errorMessage);
        },
      });
    },
  },
  created: function () {
    var now = new Date();
    var start_time = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      9,
      0,
      0
    );
    var end_time = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      13,
      0,
      0
    );
    window.setInterval(function () {
      now = new Date();
    }, 1000);

    setTimeout(
      function () {
        set_charts();
        show_loading(false);
        this.seasonally_profit_chart_data_update();
        this.monthly_sales_history_chart_update();
        this.performance_chart_data_update(1, true);
        this.seasonal_profit_chart_update();
        this.legal_real_history_chart_data(1);
        this.industry_efficiency_data_update();
        this.efficiency_data_update();
        this.per_capita_real_chart_update();
      }.bind(this),
      500
    );

    sixteen_seconds_interval_id = window.setInterval(function () {
      if (
        app_symbol_view.$data.daily_active &&
        now > start_time &&
        now < end_time
      ) {
        this.performance_chart_data_update(1, true);
      }
    }, 60000);

    let first_on_socket_ready = window.setInterval(
      function check_socket() {
        if (
          app_symbol_view.$data.information_socket &&
          app_symbol_view.$data.information_socket.readyState === 1
        ) {
          clearInterval(first_on_socket_ready);
          this.socket_ready();
        }
      }.bind(this),
      500
    );
  },
  beforeDestroy: function () {
    clearInterval(sixteen_seconds_interval_id);
  },
};

function set_charts() {
  monthly_sales_history_canvas = document
    .getElementById("monthly_sales_history_canvas")
    .getContext("2d");
  monthly_sales_history_chart = new Chart(monthly_sales_history_canvas, {
    type: "bar",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      aspectRatio: 1.4,
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return numberConvertToMillion(tooltipItem.yLabel.toFixed(1));
          },
        },
        mode: "index",
        intersect: "false",
      },
      responsive: "true",
      scales: {
        x: {
          display: true,
          fontColor: "black",
          ticks: {
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
        y: {
          position: "left",
          display: true,
          ticks: {
            beginAtZero: true,
            callback: function (value, context) {
              return numberConvertToMillion(value.toFixed(1));
            },
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
      },
      layout: {
        padding: {
          top: 20,
          bottom: 20,
        },
      },

      plugins: {
        title: {
          display: true,
          text: "گزارش عملکرد ماهانه " + app_symbol_view.$data.symbol,
          color: "black",
          padding: {
            top: 0,
            bottom: 20,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 45 + 5);
            return {
              family: "IRANSansWebFaNum",
              size: size,
            };
          },
        },
        legend: {
          display: true,
          position: "bottom",
        },
        datalabels: {
          display: false,
        },
      },
    },
  });
  session_profit_canvas = document
    .getElementById("session_profit_canvas")
    .getContext("2d");
  session_profit_chart = new Chart(session_profit_canvas, {
    type: "bar",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      aspectRatio: 1.4,
      tooltips: {
        callbacks: {
          label: function (value, context) {
            return numberConvertToMillion(value.toFixed(1));
          },
        },
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        x: {
          display: true,
          fontColor: "black",
          ticks: {
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
        y: {
          position: "left",
          display: true,
          ticks: {
            beginAtZero: true,
            callback: function (value, context) {
              return numberConvertToMillion(value.toFixed(1));
            },
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
      },
      layout: { padding: { top: 20 } },

      plugins: {
        title: {
          display: true,
          text: "گزارش سود فصلی " + app_symbol_view.$data.symbol,
          color: "black",
          padding: {
            top: 0,
            bottom: 20,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 45 + 5);
            return {
              family: "IRANSansWebFaNum",
              size: size,
            };
          },
        },
        legend: {
          display: true,
          position: "bottom",
        },
        datalabels: {
          display: false,
          callback: function (value, context) {
            return value;
          },
        },
      },
    },
  });
  legal_real_history_canvas = document
    .getElementById("legal_real_history_canvas")
    .getContext("2d");
  legal_real_history_chart = new Chart(legal_real_history_canvas, {
    type: "bar",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      aspectRatio: 1.4,
      tooltips: {
        callbacks: {
          label: function (value, context) {
            return numberConvertToMillion(value.toFixed(1));
          },
        },
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        x: {
          display: true,
          fontColor: "black",
          ticks: {
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
        y: {
          position: "left",
          display: true,
          ticks: {
            beginAtZero: true,
            callback: function (value, context) {
              return numberConvertToMillion(value.toFixed(1));
            },
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
      },
      layout: { padding: { top: 20 } },

      plugins: {
        title: {
          display: true,
          text: "سابقه خرید و فروش حقوقی",
          color: "black",
          padding: {
            top: 0,
            bottom: 20,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 45 + 5);
            return {
              family: "IRANSansWebFaNum",
              size: size,
            };
          },
        },
        legend: {
          display: false,
          position: "bottom",
        },
        datalabels: {
          display: false,
          callback: function (value, context) {
            return numberConvertToMillion(value.toFixed(1));
          },
        },
      },
    },
  });
  per_capita_real_canvas = document
    .getElementById("per_capita_real_canvas")
    .getContext("2d");
  per_capita_real_chart = new Chart(per_capita_real_canvas, {
    type: "bar",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      aspectRatio: 1.4,
      tooltips: {
        callbacks: {
          label: function (value, context) {
            return numberConvertToMillion(value.toFixed(1));
          },
        },
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        x: {
          display: true,
          fontColor: "black",
          ticks: {
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
        y: {
          position: "left",
          display: true,
          ticks: {
            beginAtZero: true,
            callback: function (value, context) {
              return numberConvertToMillion(value.toFixed(1));
            },
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
      },
      layout: { padding: { top: 20 } },

      plugins: {
        title: {
          display: true,
          text: "نسبت سرانه خرید به فروش حقیقی",
          color: "black",
          padding: {
            top: 0,
            bottom: 20,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 45 + 5);
            return {
              family: "IRANSansWebFaNum",
              size: size,
            };
          },
        },
        legend: {
          display: false,
          position: "bottom",
        },
        datalabels: {
          display: false,
          callback: function (value, context) {
            return numberConvertToMillion(value.toFixed(1));
          },
        },
      },
    },
  });
  performance_canvas = document
    .getElementById("performance_canvas")
    .getContext("2d");
  performance_chart = new Chart(performance_canvas, {
    type: "line",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      aspectRatio: 1.4,
      interaction: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      plugins: {
        datalabels: false,
        legend: {
          align: "center",
          anchor: "center",
          position: false,
        },
        title: {
          display: true,
          text: "نمودار قیمت سهم",
          color: "black",
          padding: {
            top: 10,
            bottom: 20,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 45 + 5);
            return {
              family: "IRANSansWebFaNum",
              size: size,
            };
          },
        },
      },
      scales: {
        x: {
          display: true,
          fontColor: "black",
          ticks: {
            color: "black",
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
          },
        },
        y: {
          display: true,
          ticks: {
            color: "black",
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
          },
        },
      },
    },
  });
  seasonally_profit_canvas = document
    .getElementById("seasonally_profit_canvas")
    .getContext("2d");
  seasonally_profit_chart = new Chart(seasonally_profit_canvas, {
    type: "line",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      aspectRatio: 1.4,
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return numberConvertToMillion(tooltipItem.yLabel.toFixed(1));
          },
        },
      },
      responsive: "true",
      scales: {
        x: {
          display: true,
          fontColor: "black",
          ticks: {
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
        y: {
          position: "left",
          display: true,
          ticks: {
            beginAtZero: true,
            callback: function (value, context) {
              return numberConvertToMillion(value.toFixed(1));
            },
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 80 + 5);
              return {
                family: "IRANSansWebFaNum",
                size: size,
              };
            },
            color: "black",
          },
        },
      },

      plugins: {
        title: {
          display: true,
          text: "حاشیه سود عملیاتی فصلی " + app_symbol_view.$data.symbol,
          color: "black",
          padding: {
            top: 10,
            bottom: 20,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 45 + 5);
            return {
              family: "IRANSansWebFaNum",
              size: size,
            };
          },
        },
        legend: {
          display: true,
          position: "bottom",
        },
        datalabels: {
          display: false,
        },
      },
    },
  });
}
