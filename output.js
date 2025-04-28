//4/28/2025, 6:01:20 PM
//Project:https://github.com/dream385/decode
var encode_version = "jsjiami.com.v5";
let _0x5b2bc5 = "http://doc.zhanyc.cn/pages/gdgb/";
let _0x1f5d4f = true;
let _0xe0fc32 = true;
_0xe0fc32 = false;
_0x1f5d4f = false;
let _0x36476b = Object.assign(baseConfig, {
  setting: {
    tjjl: "推荐购买脚本，返佣40%",
    version: {
      version: "202412070205",
      body: "<div style=\"padding:10px;\">第一版本</div>"
    }
  },
  pageData: {
    url: "",
    isFinishVideo: false,
    video: {
      index: null
    },
    valueChangeIndex: {
      list: null,
      courseFinish: null,
      videoPageCheck: null
    }
  },
  async addMenu() {
    await _0x36476b.waitOf(_0x17e994 => $("body:visible").length > 0);
    if ($("#zfkLeftMenuContainer").length > 0) {
      return;
    }
    GM_addStyle("#zfkLeftMenuContainer{z-index:9999;position:fixed;left:0;top:40%;color:#fff;box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;animation:glowAnimation 3s infinite alternate;}@keyframes glowAnimation{0%{box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;}20%{box-shadow:0 0 15px #ff66cc,0 0 25px #ff66cc,0 0 35px #ff66cc;}40%{box-shadow:0 0 10px #ffcc33,0 0 20px #ffcc33,0 0 30px #ffcc33;}60%{box-shadow:0 0 15px #66ff66,0 0 25px #66ff66,0 0 35px #66ff66;}80%{box-shadow:0 0 10px #3399ff,0 0 20px #3399ff,0 0 30px #3399ff;}100%{box-shadow:0 0 10px #fffb00,0 0 20px #fffb00,0 0 30px #fffb00;}}#zfkLeftMenuContainer .zfkLeftMenuStep{position:absolute;background:#3498db;width:max-content;top:-35px;display:block;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu{background:rgba(0,0,0,0.4);border-radius:0 4px 4px 0;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu:hover .zfkLeftMenuBtn-titile{width:auto}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtn-titile{cursor:pointer;word-wrap:break-word;width:1em;display:inline-block}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl{display:none;margin:0 -6px;box-sizing:border-box}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li{list-style:none;color:#fff !important;cursor:pointer;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li:hover{background:#000}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li::before{content:\"+ \"}#zfkIp51Config{padding:10px}#zfkLeftMenuContainer *{font-size:14px}");
    $("<div id=\"zfkLeftMenuContainer\">\n        <div class=\"zfkLeftMenu\">\n          <span class=\"zfkLeftMenuBtn-titile\">菜单</span>\n          <ul class=\"zfkLeftMenuBtnUl\">\n          </ul>\n    \n        </div>\n        </div>").appendTo("body");
    $(".zfkLeftMenu").hover(() => {
      $(".zfkLeftMenuBtnUl").show();
    }, () => {
      $(".zfkLeftMenuBtnUl").hide();
    });
  },
  async init() {
    console.log("%c init", "background:rgb(255,0,0);color:#fff");
    if (unsafeWindow.window === unsafeWindow.top) {
      _0x36476b.addMenu();
      _0x36476b.registerMenuCommandTemplate();
    }
    let _0xc5b7f1 = unsafeWindow.alert;
    unsafeWindow.alert = function (_0x5a5cec) {
      if (_0x5a5cec == "选课成功!") {
        layer.alert(_0x5a5cec);
      } else {
        _0xc5b7f1(_0x5a5cec);
      }
    };
    this.addStyle();
    this.setPageData();
    if (location.href.indexOf("user/login?yh=") != -1) {
      console.log("%c user/login?yh", "background:rgb(255,0,0);color:#fff");
      _0x36476b.page_yhwelcome();
      return;
    } else {
      if (location.href.indexOf("loginSuccess.html?yh=") != -1) {
        console.log("%c loginSuccess.html?yh", "background:rgb(255,0,0);color:#fff");
        _0x36476b.page_yhwelcome2();
      }
    }
    let _0x51445b = await _0x36476b.checkVersion();
    if (_0x51445b) {
      _0x36476b.begin();
    }
  },
  async begin() {
    console.log("%c begin", "background:rgb(255,0,0);color:#fff");
    let _0x17e3c3 = location.href;
    setInterval(async () => {
      if (_0x17e3c3 != location.href) {
        _0x17e3c3 = location.href;
        _0x36476b.runByUrl(location.href);
      }
    }, 500);
    _0x36476b.runByUrl(location.href);
  },
  async runByUrl(_0x1ada1d) {
    if (_0x36476b.matchUrl("/LearningCourse.aspx")) {
      await _0x36476b.setUserName_http();
      _0x36476b.page_list();
    } else {
      if (_0x36476b.matchUrl("/newgdceportal/study/StudyCenter.aspx")) {
        _0x36476b.addBsTips();
        await _0x36476b.setUserName_http();
      } else {
        if (_0x36476b.matchUrl("gdceportal/Study/StudyCenter.aspx")) {
          _0x36476b.addBsTips();
          await _0x36476b.setUserName_http();
        } else {
          if (location.href.includes("/play_pc/playdo_pc.html")) {
            _0x36476b.page_videoTop();
          } else {
            if (_0x36476b.matchUrl("/playmp4_pc.html") || _0x36476b.matchUrl("/CourseWare")) {
              _0x36476b.page_video();
            } else {
              if (location.href.includes("/Study/ReqCourse.aspx?")) {
                _0x36476b.page_ReqCourse();
              } else {
                if (location.href.includes("/Study/CourseDetail.aspx?")) {
                  _0x36476b.page_CourseDetail();
                } else {
                  if (location.href.includes("/workshopindex/mergeClass")) {
                    await _0x36476b.setUserName_http();
                    _0x36476b.page_mergeClass(false);
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  async addBsTips() {
    await _0x36476b.waitTimeout(500);
    $("body").append("<div style=\"position:fixed;top:80px;right:0;background:#fff;border:1px solid #00f;padding:4px;width:300px;color:red;\" class=\"zfk-tips-container\"><span style=\"position:absolute;top: -14px;color:red;font-weight:700;font-size:1.5em;right: -3px;cursor: pointer\" class=\"zfk-close-tips\">×</span> 脚本提示：本网站不可以倍速播放、不可以拖进度条，都不记录学时！如果重复打开视频页面后又返回列表页面，一直循环，请看脚本使用说明文档解决</div>");
    $(".zfk-close-tips").click(function () {
      $(".zfk-tips-container").remove();
    });
  },
  async page_mergeClass(_0x2a7bc6 = true) {
    console.log("%c page_CourseDetail", "background:rgb(255,0,0);color:#fff");
    await _0x36476b.gmAuthDownScore("3353432c32fe424a8a1e1a395cc01171");
    _0x36476b.closeWaitConfrimWin();
    await _0x36476b.waitOf(_0xe93e22 => $(".item_box").length > 0);
    _0x36476b.addBsTips();
    await _0x36476b.waitTimeout(300);
    if (_0x2a7bc6 == false) {
      let _0x457c4e = $("[role=\"tablist\"] [role=\"tab\"]").index($("[role=\"tablist\"] [role=\"tab\"].is-active"));
      let _0x2616db = _0x36476b.getGMData("tabIndex", 0);
      if (_0x457c4e != _0x2616db) {
        $("[role=\"tablist\"] [role=\"tab\"]").eq(_0x2616db).click();
        await _0x36476b.waitTimeout(1000);
        await _0x36476b.waitOf(_0x47d29b => $(".item_box:visible").length > 0);
        await _0x36476b.waitTimeout(1000);
      }
    }
    if (_0x2a7bc6) {
      if ($(".item_box:visible").length == 0) {
        _0x36476b.tipsMsg("请切换到需要学课的课程列表后再点击");
        return;
      }
      let _0x456b4c = $("[role=\"tablist\"] [role=\"tab\"]").index($("[role=\"tablist\"] [role=\"tab\"].is-active"));
      _0x36476b.setGMData("tabIndex", _0x456b4c);
    }
    let _0x3714e8 = null;
    $(".item_box:visible").each((_0x1ff2ba, _0x272c70) => {
      let _0x239f87 = Number($(_0x272c70).find("[role=\"progressbar\"]").attr("aria-valuenow"));
      if (_0x239f87 < 99) {
        _0x3714e8 = $(_0x272c70);
        return false;
      }
    });
    if (_0x3714e8 == null) {
      _0x36476b.alertMsg("学习完成");
      return;
    }
    _0x36476b.setGMData("listUrl", location.href);
    _0x36476b.confirmRun("3秒后执行下一步", 3000).then(async _0xc66349 => {
      _0x36476b.setGMData("videoType", "2");
      _0x3714e8.find(".item_title").click();
      await _0x36476b.openLjTips();
    });
  },
  async page_CourseDetail() {
    console.log("%c page_CourseDetail", "background:rgb(255,0,0);color:#fff");
    await _0x36476b.waitOf(_0x12d426 => $("input[value=\"继续选课\"]").length > 0, 300);
    $.ajax({
      url: "/gdceportal/Study/CourseDetail.aspx?id=" + _0x36476b.parseQueryString(location.href).id,
      type: "POST",
      contentType: "application/x-www-form-urlencoded",
      data: {
        __VIEWSTATE: $("#__VIEWSTATE").val(),
        __VIEWSTATEGENERATOR: $("#__VIEWSTATEGENERATOR").val(),
        __EVENTVALIDATION: $("#__EVENTVALIDATION").val(),
        btnConfirm2: $("#btnConfirm2").val()
      },
      success: _0x300ed0 => {
        _0x36476b.tipsMsg("选课完成");
        _0x36476b.setGMData("xkFinish", _0x36476b.now());
        window.close();
      }
    });
  },
  async page_ReqCourse() {
    console.log("%c page_ReqCourse", "background:rgb(255,0,0);color:#fff");
    await _0x36476b.waitOf(_0x541ebc => $(".course-list-title").length > 0, 300);
    GM_addValueChangeListener("xkFinish", function (_0x5ac1fb, _0x4e96a4, _0x17bbcc, _0x156daf) {
      location.reload();
    });
    let _0x402502 = null;
    $(".course-list-title").each((_0x125230, _0x407aff) => {
      if ($(_0x407aff).parents("tr:first").text().includes("进入选课")) {
        _0x402502 = $(_0x407aff).parents("tr:first");
        return false;
      }
    });
    if (_0x402502 != null) {
      _0x36476b.confirmRun("2秒后打开选课", 2000).then(_0xccc67a => {
        _0x402502.find("a:last")[0].click();
      });
    } else {
      let _0x591794 = Number($("#lblCurrentPage").text());
      let _0x5bca5b = Number($("#lblPage").text());
      if (_0x591794 < _0x5bca5b) {
        _0x36476b.confirmRun("3秒后翻页", 1000).then(_0x24ba85 => {
          $("#btnNextPage").click();
        });
      } else {
        _0x36476b.tipsMsg("本目录已全部选课完成");
      }
    }
  },
  async checkVersion() {
    return new Promise(_0x1f3711 => {
      if (_0xe0fc32) {
        _0x36476b.delGMData("code");
      }
      if (!top === window || _0xe0fc32) {
        return _0x1f3711(true);
      }
      _0x36476b.gmPost("/yh/base/checkVersion", {
        id: baseConfig.project.id,
        v1: baseConfig.project.version,
        v2: _0x36476b.getGMData("version", "")
      }).then(_0x7b185f => {
        if (_0x7b185f.message == "更新脚本") {
          layer.alert(_0x7b185f.result.msg, function () {
            top.open(_0x7b185f.result.url);
          });
        } else {
          if (_0x7b185f.message == "更新内容") {
            _0x36476b.delGMData("code");
            location.href = location.href;
          }
        }
        return _0x1f3711(true);
      }, _0x3492b9 => {
        console.log(_0x3492b9);
      });
    });
  },
  async page_videoTop() {
    console.log("%c page_videoTop", "background:rgb(0,0,0);color:#fff");
    _0x36476b.closeWaitConfrimWin();
    _0x36476b.setGMData("checkVideoPageCallback", _0x36476b.now());
    let _0x3719e2 = true;
    GM_addValueChangeListener("refreshListCallback", function (_0xe13609, _0x154e0f, _0x3cd07a, _0x5e9ef6) {
      _0x3719e2 = false;
    });
    GM_addValueChangeListener("openListPage", async function (_0x4d5115, _0x1289e3, _0x4b8f34, _0x3c879f) {
      _0x36476b.confirmRun().then(_0x1de894 => {
        _0x36476b.setGMData("refreshList", _0x36476b.now());
        setTimeout(async () => {
          if (_0x3719e2) {
            let _0x21806f = _0x36476b.getGMData("listUrl", null);
            if (_0x21806f == null) {
              layer.confirm("脚本自动换课失败，原因：不知道课程的列表页面地址！请按【使用说明】从列表页面让脚本自动打开视频页面，请勿手动打开视频页面！", {
                icon: 3,
                title: "运行失败！",
                btn: ["查看使用说明", "取消"]
              }, function (_0x5e78eb) {
                window.open("https://doc.zhanyc.cn/pages/gdgb/#%E8%84%9A%E6%9C%AC%E5%90%AF%E5%8A%A8");
                layer.close(_0x5e78eb);
              }, function () {});
              return;
            }
            _0x36476b.openLjTips(true, true, 3000);
            _0x36476b.setGMData("autoRunListTime", _0x36476b.now());
            window.open(_0x21806f);
            return;
          }
          unsafeWindow.closePage();
        }, 1000);
      });
    });
    GM_addValueChangeListener("closeVideo", function (_0x308976, _0x16bbfe, _0x1971ec, _0x3184c4) {
      _0x36476b.setGMData("refreshList", _0x36476b.now());
      unsafeWindow.closePage();
    });
    GM_addValueChangeListener("updateTitle", function (_0x199df4, _0x225b8f, _0x434d78, _0x4dd5f2) {
      $("title").text(_0x434d78);
    });
    let _0x59b058 = _0x36476b.getGMData("finishVideoID", null);
    await _0x36476b.waitOf(_0x49c475 => unsafeWindow.courseId);
    if (_0x59b058 == courseId) {
      _0x36476b.confirmRun("检测到当前课程实际已经完成，5秒后结束观看", 5000).then(_0x13b273 => {
        _0x36476b.setGMData("refreshList", _0x36476b.now());
        unsafeWindow.closePage();
      });
    }
  },
  page_StudyCenter2() {
    _0x36476b.waitOf(_0x4210f5 => $(".text_userName>span").text().trim() != "").then(_0xacb26d => {
      let _0xea03f2 = $(".text_userName>span").text().trim();
      _0x36476b.setGMData("username", _0xea03f2);
    });
  },
  page_StudyCenter() {
    _0x36476b.waitOf(_0x5bada5 => $(".userName-item").text().trim() != "").then(_0x4f2435 => {
      let _0x591fab = $(".userName-item").text().trim();
      _0x36476b.setGMData("username", _0x591fab);
    });
  },
  async setUserName_http() {
    return new Promise(async (_0x5d2c67, _0x3ec1bf) => {
      $.get("/gdceportal/study/BaseInfo.aspx", _0x5f0162 => {
        let _0x382b5a = _0x5f0162;
        let _0x238e43 = $("<html>" + _0x382b5a + "</html>").find("#lblShowName").text().trim();
        if (!_0x238e43) {
          _0x36476b.alertMsg("您的学习网站账号掉线了，请重新登录");
          return _0x3ec1bf();
        }
        _0x36476b.setGMData("username", _0x238e43);
        return _0x5d2c67();
      });
    });
  },
  page_videoRun() {
    GM_removeValueChangeListener(_0x36476b.pageData.valueChangeIndex.videoPageCheck);
    _0x36476b.pageData.valueChangeIndex.videoPageCheck = GM_addValueChangeListener("videoPageCheck", function (_0xed45c1, _0x469e6f, _0x3c6291, _0x4b49d0) {
      console.log("videoPageCheck", arguments);
      _0x36476b.setGMData("videoPageIsRun", new Date().getTime());
    });
  },
  isDZKFMode() {
    let _0x10a32a = typeof loadFun == "function" && loadFun.toString().includes("var data = res.response;");
    if (!_0x10a32a) {
      _0x10a32a = typeof isDZKF == "boolean" && !!isDZKF;
    }
    return _0x10a32a;
  },
  async page_video() {
    _0x36476b.closeWaitConfrimWin();
    await _0x36476b.gmAuthDownScore("3353432c32fe424a8a1e1a395cc01171");
    console.log("%c page_video", "background:rgb(0,0,0);color:#fff");
    let _0xa4191a = 2;
    _0x36476b.closeWaitConfrimWin();
    if (_0x36476b.pageData.video.index != null) {
      return;
    }
    _0x36476b.pageData.video.index = setInterval(async () => {
      try {
        if (_0x36476b.pageData.waitTime > 0) {
          _0x36476b.pageData.waitTime -= _0xa4191a;
          return;
        }
        if (!_0x36476b.getVideo()) {
          console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
          return;
        }
        _0x36476b.getVideo().volume = 0;
        try {
          let _0x47358a = "进度：" + _0x36476b.getCurTime().toFixed(0) + "/" + _0x36476b.getTotalTime().toFixed(0);
          _0x36476b.setGMData("updateTitle", _0x47358a);
        } catch (_0x47574a) {}
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x15563d = _0x36476b.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
        if (_0x15563d != null) {
          _0x15563d.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
        }
        let _0x477219 = await _0x36476b.isPlayFinish();
        if (_0x477219) {
          _0x36476b.pageData.waitTime = 15;
          layer.msg("视频即将结束，等待下一步操作", {
            time: 10000
          });
          _0x36476b.nextVideo();
          clearInterval(_0x36476b.pageData.video.index);
          _0x36476b.pageData.video.index = null;
          return;
        }
        let _0x310e71 = await _0x36476b.videoIsPlay();
        if (!_0x310e71) {
          if (!_0x477219) {
            _0x36476b.play();
          }
        }
      } catch (_0x47f51d) {
        console.error("视频页面定时器出错", _0x47f51d);
      }
    }, _0xa4191a * 1000);
  },
  isPlayFinish() {
    try {
      return _0x36476b.getTotalTime() > 0 && _0x36476b.getCurTime() + 5 >= _0x36476b.getTotalTime();
    } catch (_0x380318) {
      return false;
    }
  },
  getCurTime() {
    let _0x464e6a = 0;
    try {
      _0x464e6a = _0x36476b.getVideo().currentTime;
    } catch (_0x5253c5) {
      console.error(_0x5253c5);
    }
    return _0x464e6a;
  },
  getTotalTime() {
    let _0x18c120 = 0;
    try {
      _0x18c120 = _0x36476b.getVideo().duration;
    } catch (_0x45c41d) {
      console.error(_0x45c41d);
    }
    return _0x18c120;
  },
  async videoIsPlay() {
    return new Promise(_0x1e4124 => {
      try {
        let _0x1d1fc7 = $("video")[0].currentTime;
        setTimeout(() => {
          let _0xafa99d = $("video")[0].currentTime;
          let _0x47762d = _0xafa99d > _0x1d1fc7;
          if (_0x47762d) {
            setTimeout(() => {
              let _0x58abc4 = $("video")[0].currentTime;
              let _0x2b9558 = _0x58abc4 > _0xafa99d;
              _0x1e4124(_0x2b9558);
            }, 100);
          } else {
            return _0x1e4124(false);
          }
        }, 100);
      } catch (_0x40dc46) {
        _0x1e4124(false);
      }
    });
  },
  nextVideo(_0x5ec183 = 10) {
    layer.msg("视频即将结束，等待下一步操作", {
      time: 10000
    });
    setTimeout(() => {
      _0x36476b.setGMData("openListPage", _0x36476b.now());
    }, _0x5ec183 * 1000);
  },
  page_video_old() {
    console.log("%c page_video", "background:rgb(255,0,0);color:#fff");
    _0x36476b.closeWaitConfrimWin();
    _0x36476b.checkVideoPlay();
    _0x36476b.waitOf(_0xc51ed => {
      if (!!unsafeWindow.myPlayer && !!unsafeWindow.myPlayer.volume) {
        unsafeWindow.myPlayer.volume(0);
        console.log("静音完成");
        return true;
      }
      return false;
    });
    let _0x4571fd = -1;
    _0x36476b.waitOf(_0x24a797 => {
      if (!!unsafeWindow.myPlayer && !!unsafeWindow.myPlayer.duration) {
        _0x4571fd = unsafeWindow.myPlayer.currentTime();
        if (unsafeWindow.myPlayer.currentTime() >= unsafeWindow.myPlayer.duration()) {
          return true;
        }
      }
      return false;
    }, 1000, -1).then(_0x1e3805 => {
      _0x36476b.confirmRun("检测到当前课程实际已经完成，5秒后结束观看。如果进度不正常，请点击下面【取消执行】按钮，推动进度补充学习时长", 5000).then(_0x73ae91 => {
        _0x36476b.setGMData("refreshList", _0x36476b.now());
        _0x36476b.setGMData("closeVideo", _0x36476b.now());
      });
    });
    setInterval(() => {
      if (unsafeWindow.myPlayer.currentTime() == _0x4571fd) {
        _0x36476b.confirmRun("检测到视频好像卡住了，准备重新载入视频开始播放", 10000).then(_0x56ad61 => {
          console.log("check 卡住");
          _0x36476b.setGMData("refreshList", _0x36476b.now());
          _0x36476b.setGMData("closeVideo", _0x36476b.now());
        });
      }
    }, 60000);
  },
  async page_list() {
    console.log("%c page_list", "background:rgb(255,0,0);color:#fff");
    await _0x36476b.gmAuthDownScore("3353432c32fe424a8a1e1a395cc01171");
    _0x36476b.setGMData("videoType", "1");
    _0x36476b.setGMData("closeVideo", _0x36476b.now());
    GM_addValueChangeListener("refreshList", function (_0x451ac5, _0x2515a4, _0x216d77, _0xb349ca) {
      _0x36476b.setGMData("refreshListCallback", _0x36476b.now());
      _0x36476b.confirmRun("3秒后刷新页面更新最新进度").then(_0x5ca682 => {
        top.location.reload();
      });
    });
    _0x36476b.clickNextCourse();
  },
  checkVideoPlay() {
    let _0x192b99 = _0x36476b.getCurTime();
    return new Promise(_0x3f22bd => {
      setTimeout(() => {
        if (_0x36476b.getTotalTime() > 0 && _0x36476b.getCurTime() == _0x192b99) {
          _0x36476b.play();
        }
        _0x192b99 = _0x36476b.getCurTime();
        _0x3f22bd();
      }, 3000);
    });
  },
  timeSecondsFormat(_0x383f12) {
    _0x383f12 = Math.floor(Math.abs(_0x383f12));
    var _0x3305c6 = Math.floor(_0x383f12 / 3600);
    var _0x475340 = Math.floor(_0x383f12 % 3600 / 60);
    var _0x5b3baa = _0x383f12 % 60;
    _0x3305c6 = _0x3305c6 < 10 ? "0" + _0x3305c6 : _0x3305c6;
    _0x475340 = _0x475340 < 10 ? "0" + _0x475340 : _0x475340;
    _0x5b3baa = _0x5b3baa < 10 ? "0" + _0x5b3baa : _0x5b3baa;
    return _0x3305c6 + ":" + _0x475340 + ":" + _0x5b3baa;
  },
  setSkipHtml() {
    let _0x410938 = _0x36476b.getGMData("skipList", []);
    $(".zfk-skip").remove();
    $(".listframe tr").not(".listheader").each((_0x5640d3, _0x5d9964) => {
      let _0xa2e4b6 = _0x36476b.parseQueryString($(_0x5d9964).find("td:first a").attr("href")).id.replace(/[^a-zA-Z0-9]/g, "");
      if (_0x410938.includes(_0xa2e4b6)) {
        $(_0x5d9964).find("td:first a").html("<span class=\"zfk-skip tips\">[已跳过]</span>" + $(_0x5d9964).find("td:first a").text());
        $(_0x5d9964).find("td:first").append("<button type=\"button\" class=\"zfk-btn zfk-skip\" onclick=\"zfk.skip('" + _0xa2e4b6 + "',false)\">取消跳过</button>");
      } else {
        $(_0x5d9964).find("td:first").append("<button type=\"button\" class=\"zfk-btn zfk-skip\"  onclick=\"zfk.skip('" + _0xa2e4b6 + "',true)\">跳过</button>");
      }
    });
  },
  clickNextCourse() {
    console.log("%c clickNextCourse", "background:rgb(255,0,0);color:#fff");
    _0x36476b.waitOf(_0x510fa9 => $(".listframe tr").not(".listheader").length > 0).then(_0x537f6e => {
      let _0x249efd = unsafeWindow.w;
      unsafeWindow.w = _0x2886a9 => {
        _0x36476b.setGMData("finishVideoID", null);
        if (_0x36476b.pageData.isFinishVideo) {
          let _0x40f35d = _0x36476b.parseQueryString(_0x2886a9);
          if (_0x40f35d.courseId) {
            _0x36476b.setGMData("finishVideoID", _0x40f35d.courseId);
          }
        }
        _0x249efd(_0x2886a9);
      };
      _0x36476b.pageData.isFinishVideo = false;
      _0x36476b.setSkipHtml();
      let _0x6c4423 = _0x36476b.getGMData("skipList", []);
      $(".listframe tr").not(".listheader").each((_0x1e9188, _0x2a1a61) => {
        let _0x80934e = _0x36476b.parseQueryString($(_0x2a1a61).find("td:first a").attr("href")).id.replace(/[^a-zA-Z0-9]/g, "");
        if (_0x6c4423.includes(_0x80934e)) {
          return true;
        }
        let _0x4e365c = Number($(_0x2a1a61).find("td").eq(4).text().trim().replace("%", ""));
        if (_0x4e365c == 100) {
          return true;
        }
        let _0x2c9615 = top.location.href;
        if (_0x2c9615.toUpperCase().includes("/gdceportal/study/studyCenter.aspx?".toUpperCase())) {
          _0x2c9615 = _0x2c9615.split("?")[0];
        }
        _0x36476b.setGMData("listUrl", _0x2c9615);
        _0x36476b.confirmRun("3秒后开始下一步", 3000).then(_0x58398e => {
          let _0x32fba7 = Number($(_0x2a1a61).find("td").eq(5).find("a").attr("title").replace(/[^0-9\.]*/g, ""));
          _0x36476b.pageData.isFinishVideo = _0x32fba7 == 100;
          $(_0x2a1a61).find("td").eq(5).find("a")[0].click();
          _0x36476b.alertMsg("请勿关闭当前页面，脚本会在视频播放完毕后自动开启下一门课程学习");
          let _0x484dcd = false;
          GM_addValueChangeListener("checkVideoPageCallback", function (_0x2e92d9, _0x20c7e3, _0x4d6fed, _0x5c5342) {
            _0x484dcd = true;
          });
          setTimeout(() => {
            if (!_0x484dcd) {
              top.zfk.openLjTips(false);
            }
          }, 10000);
        });
        return false;
      });
    });
  },
  skip(_0x3d0cd9, _0x47457f) {
    let _0x36361b = _0x36476b.getGMData("skipList", []);
    if (_0x47457f && !_0x36361b.includes(_0x3d0cd9)) {
      _0x36361b.push(_0x3d0cd9);
      _0x36476b.setGMData("skipList", _0x36361b);
      layer.msg("设置跳过成功");
      _0x36476b.setSkipHtml();
    } else {
      if (!_0x47457f && _0x36361b.includes(_0x3d0cd9)) {
        let _0x236aac = _0x36361b.findIndex(_0x445866 => _0x445866 == _0x3d0cd9);
        _0x36361b.splice(_0x236aac, 1);
        _0x36476b.setGMData("skipList", _0x36361b);
        layer.msg("取消跳过成功");
        _0x36476b.setSkipHtml();
      }
    }
  },
  nextPage() {
    console.log("%c nextPage", "background:rgb(255,0,0);color:#fff");
    let _0xf540a0 = $(".progressvalue").eq(0).parents("tr")[0];
    $(".paginate_active").next()[0].click();
    _0x36476b.waitOf(_0x1f7385 => $(".progressvalue").eq(0).parents("tr")[0] !== _0xf540a0).then(_0x2eec4c => {
      _0x36476b.clickNextCourse();
    });
  },
  play() {
    $("video")[0].volume = 0;
    $("video")[0].play();
  },
  setStep() {
    if (_0x36476b.getTotalTime() > 60) {
      $("video")[0].currentTime = _0x36476b.getTotalTime() - 3;
    }
  },
  getVideo() {
    if ($("video").length == 0) {
      return undefined;
    }
    return $("video")[0];
  },
  showVersionAlert(_0x544257 = true) {
    let _0x148baa = _0x36476b.getGMData("showVersionAlert", "");
    if (!_0x544257 && _0x148baa == _0x36476b.getGMData("version")) {
      return;
    }
    layer.open({
      type: "1",
      title: "版本号：" + _0x36476b.setting.version.version,
      content: _0x36476b.setting.version.body,
      btn: "我知道了",
      area: ["600px", "auto"],
      yes: function (_0x3c1fed) {
        _0x36476b.setGMData("showVersionAlert", _0x36476b.getGMData("version"));
        layer.close(_0x3c1fed);
      }
    });
  },
  async callRegisterMenuCommand(_0x21c599, _0x2fb0fb) {
    if (!_0x36476b.pageData.menuBtnIndex) {
      _0x36476b.pageData.menuBtnIndex = 0;
    }
    GM_registerMenuCommand(_0x21c599, _0x2fb0fb);
    await _0x36476b.waitOf(_0x5a40b3 => $("body:visible").length > 0);
    await _0x36476b.waitTimeout(500);
    if ($("#zfkLeftMenuContainer").length > 0) {
      _0x36476b.pageData.menuBtnIndex++;
      $("#zfkLeftMenuContainer .zfkLeftMenuBtnUl").append("<li id=\"zfkMenuBtn_" + _0x36476b.pageData.menuBtnIndex + "\">" + _0x21c599 + "</li>");
      $("#zfkMenuBtn_" + _0x36476b.pageData.menuBtnIndex).click(function () {
        _0x2fb0fb();
      });
    }
  },
  openDoc() {
    window.open(_0x5b2bc5);
  },
  registerMenuCommandTemplate() {
    _0x36476b.callRegisterMenuCommand("使用说明", _0x36476b.openDoc);
    _0x36476b.callRegisterMenuCommand("我的信息", _0x36476b.myInfo);
    _0x36476b.callRegisterMenuCommand("启动专题学习", _0x36476b.page_mergeClass);
    _0x36476b.callRegisterMenuCommand("联系作者", _0x36476b.linkAuthor);
    _0x36476b.callRegisterMenuCommand("版本：" + _0x36476b.setting.version.version, _0x36476b.showVersionAlert);
  },
  linkAuthor() {
    window.open("http://doc.zhanyc.cn/contact-me/");
  },
  logout() {
    _0x36476b.delGMData("token");
    layer.msg("脚本账号已退出");
  },
  setClip(_0xce0195) {
    GM_setClipboard(_0xce0195, "text");
    layer.msg("复制成功");
  },
  addStyle() {
    GM_addStyle("\n      .zfk-btn{background-color:#0fbcf9;color:white;padding:4px 12px;border:none;box-sizing:content-box;font-size:14px;height:20px;border-radius:4px;cursor:pointer;display:inline-block;border:1px solid transparent;white-space:nowrap;user-select:none;text-align:center;vertical-align:middle}.zfk-btn:hover{opacity:.8}.zfk-btn.success{background-color:#38b03f}.zfk-btn.warning{background-color:#f1a325}.zfk-btn.info{background-color:#03b8cf}.zfk-btn.danger{background-color:#ea644a}.zfk-form-tips{font-size:1.2em;color:red}.tips{color:red}.zfk-form textarea,.zfk-form input[type=text],.zfk-form input[type=number],.zfk-form input[type=password]{border:1px solid #888;border-radius:4px;padding:5px;box-sizing:border-box}.zfk-form textarea{width:100%}.zfk-form-item{margin-bottom:10px}.zfk-form-item>label:first-child{width:7em;text-align:right;display:inline-block;padding-right:5px;margin-right:0}.zfk-form-item label{margin-right:4px}.zfk-form-item.block>label:first-child{text-align:left;display:block;width:100%;font-weight:bold}.text-l{text-align:left !important}.text-c{text-align:center !important}.text-r{text-align:right !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.p-t-0{padding-top:0px !important}.p-t-5{padding-top:5px !important}.p-t-10{padding-top:10px !important}.p-t-15{padding-top:15px !important}.p-t-20{padding-top:20px !important}.p-b-0{padding-bottom:0px !important}.p-b-5{padding-bottom:5px !important}.p-b-10{padding-bottom:10px !important}.p-b-15{padding-bottom:15px !important}.p-b-20{padding-bottom:20px !important}.p-l-0{padding-left:0px !important}.p-l-5{padding-left:5px !important}.p-l-10{padding-left:10px !important}.p-l-15{padding-left:15px !important}.p-l-20{padding-left:20px !important}.p-r-0{padding-right:0px !important}.p-r-5{padding-right:5px !important}.p-r-10{padding-right:10px !important}.p-r-15{padding-right:15px !important}.p-r-20{padding-right:20px !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.m-t-0{margin-top:0px !important}.m-t-5{margin-top:5px !important}.m-t-10{margin-top:10px !important}.m-t-15{margin-top:15px !important}.m-t-20{margin-top:20px !important}.m-b-0{margin-bottom:0px !important}.m-b-5{margin-bottom:5px !important}.m-b-10{margin-bottom:10px !important}.m-b-15{margin-bottom:15px !important}.m-b-20{margin-bottom:20px !important}.m-l-0{margin-left:0px !important}.m-l-5{margin-left:5px !important}.m-l-10{margin-left:10px !important}.m-l-15{margin-left:15px !important}.m-l-20{margin-left:20px !important}.m-r-0{margin-right:0px !important}.m-r-5{margin-right:5px !important}.m-r-10{margin-right:10px !important}.m-r-15{margin-right:15px !important}.m-r-20{margin-right:20px !important}.bold{font-weight:bold !important}.tips-box{padding:10px;border:1px solid red;background-color:#fff0f0;color:red}.bold{font-weight:bold}.font-l{font-size:1.2em}.font-xl{font-size:40px}.font-l{font-size:25px}.color-default{color:#ea644a !important}.color-success{color:#38b03f !important}.color-warning{color:#f1a325 !important}.color-danger{color:#ea644a !important}.bg-default{background-color:#ea644a !important}.bg-success{background-color:#38b03f !important}.bg-warning{background-color:#f1a325 !important}.bg-danger{background-color:#ea644a !important}.zfk-table{border-collapse:collapse}.zfk-table thead{background-color:#1abc9c}.zfk-table td,.zfk-table th{text-align:center;padding:6px;border:1px solid #888}.zfk-table tr:nth-child(2n){background-color:#f2f2f2}.zfk-table tr:hover{background-color:#fff799}.zfk-container *{font-size:17px}\n      ");
    GM_addStyle(".listrowd1,.listrowd{position: relative;}button.zfk-skip{position:absolute;left:23em;top:10px}");
  },
  openConfig() {
    let _0x512001 = "\n      <div id=\"zfkConfig\" style=\"padding: 20px;\">\n\n      <form class=\"layui-form layui-form-pane\" lay-filter=\"configForm\">\n    <div class=\"layui-form-item\" pane>\n      <label class=\"layui-form-label\">价格提取</label>\n      <div class=\"layui-input-block\">\n        <input type=\"radio\" name=\"priceTQ\" value=\"1\" title=\"是\">\n        <input type=\"radio\" name=\"priceTQ\" value=\"0\" title=\"否\">\n      </div>\n    </div>\n    <div class=\"layui-form-item\">\n      <div class=\"layui-input-block\">\n        <button class=\"layui-btn\" type=\"button\" lay-filter=\"formDemo\" onclick=\"zfk.saveConfig()\">保存</button>\n      </div>\n    </div>\n  </form>\n    </div>\n    ";
    layer.open({
      type: "1",
      title: "设置",
      content: _0x512001,
      btn: false,
      area: ["500px", "460px"]
    });
    layui.form.render();
    let _0x3d54dd = _0x36476b.getConfig();
    layui.form.val("configForm", _0x3d54dd);
  },
  getElByText(_0x82f3b7, _0x54bb0d, _0x5f5979 = "eq", _0x3d986d = true) {
    let _0xcaf582 = null;
    $(_0x82f3b7).each((_0xcd7089, _0x19732e) => {
      if (_0x3d986d && !$(_0x19732e).is(":visible")) {
        return true;
      }
      if (_0x5f5979 == "eq" && $(_0x19732e).text().trim() == _0x54bb0d) {
        _0xcaf582 = $(_0x19732e);
        return false;
      } else {
        if (_0x5f5979 == "startsWith" && $(_0x19732e).text().trim().startsWith(_0x54bb0d)) {
          _0xcaf582 = $(_0x19732e);
          return false;
        } else {
          if (_0x5f5979 == "endsWith" && $(_0x19732e).text().trim().endsWith(_0x54bb0d)) {
            _0xcaf582 = $(_0x19732e);
            return false;
          }
        }
      }
    });
    return _0xcaf582;
  },
  getElListByText(_0x249d2f, _0x272f2a, _0x27401c = "eq", _0xb07e2f = true) {
    let _0x5774a4 = [];
    $(_0x249d2f).each((_0x27d237, _0x13d70) => {
      if (_0xb07e2f && !$(_0x249d2f).is(":visible")) {
        return true;
      }
      if (_0x27401c == "eq" && $(_0x13d70).text().trim() == _0x272f2a) {
        _0x5774a4.push($(_0x13d70));
      } else {
        if (_0x27401c == "startsWith" && $(_0x13d70).text().trim().startsWith(_0x272f2a)) {
          _0x5774a4.push($(_0x13d70));
        } else {
          if (_0x27401c == "endsWith" && $(_0x13d70).text().trim().endsWith(_0x272f2a)) {
            _0x5774a4.push($(_0x13d70));
          }
        }
      }
    });
    return _0x5774a4;
  },
  confirmRun(_0x4f2a90 = "脚本：3秒后执行下一步操作", _0xadae56 = 3000) {
    return new Promise((_0x297b64, _0x180f37) => {
      let _0x3e3f6e = true;
      clearTimeout(_0x36476b.pageData.confirmRunIndex);
      _0x36476b.pageData.confirmRunIndex = layer.alert(_0x4f2a90, {
        icon: 3,
        title: "是否继续？",
        btn: ["取消执行"],
        offset: "100px"
      }, function (_0x2d68c6) {
        _0x3e3f6e = false;
        _0x180f37();
        layer.close(_0x36476b.pageData.confirmRunIndex);
      });
      setTimeout(() => {
        layer.close(_0x36476b.pageData.confirmRunIndex);
        _0x297b64(true);
      }, _0xadae56);
    });
  },
  saveConfig() {
    var _0x25fed8 = layui.form.val("configForm");
    _0x36476b.setConfig(_0x25fed8);
    layer.msg("保存成功");
  },
  waitOfAbortTemplate() {
    _0x36476b.pageData.reject.forEach(_0xa14a61 => {
      _0xa14a61.abort();
    });
    _0x36476b.pageData.reject = [];
    let _0x259293 = _0x36476b.getPromiseWithAbort(_0x36476b.waitOf(() => {
      let _0x763764 = false;
      if ($jq("div[class][style]").length > 0) {
        $jq("div[class][style]").each((_0x28f01e, _0x1af93c) => {
          if ($jq(_0x1af93c).attr("class").startsWith("styles_seat_bg_wrap")) {
            _0x763764 = $(_0x1af93c).next().find("a[role=\"button\"]").length > 0;
            if (_0x763764) {
              return false;
            }
          } else {
            if ($jq(_0x1af93c).attr("class").startsWith("styles_bg_white")) {
              _0x763764 = $(_0x1af93c).find("a[role=\"button\"]").length > 0;
              if (_0x763764) {
                return false;
              }
            }
          }
        });
      }
      return _0x763764;
    }));
    _0x36476b.pageData.reject.push(_0x259293);
    _0x259293.promise.then(_0xaedc8a => {
      _0x36476b.page_step2Detail_Click();
    });
  },
  setPageData() {
    this.pageData.url = location.href;
  },
  timeoutTemplate() {
    let _0x3a2763 = 10000;
    let _0x1782c7 = 100;
    let _0x4c6c67 = setInterval(() => {
      console.log("disposeContent index");
      _0x3a2763 -= _0x1782c7;
      if (_0x3a2763 < 0) {
        clearInterval(_0x4c6c67);
        console.log("已过" + _0x3a2763 / 1000 + "秒，定时器超时退出");
      }
      if ($("#resume-page .geek-name").length > 0) {
        clearInterval(_0x4c6c67);
      }
    }, _0x1782c7);
  },
  getTimeout() {
    let _0x53a3de = GM_getValue("zfk_jl_config", null);
    let _0x2308f8 = (Math.random() * (Number(_0x53a3de.fwpl2) - Number(_0x53a3de.fwpl1)) + Number(_0x53a3de.fwpl1)) * 1000;
    console.log("getTimeout", _0x2308f8);
    return _0x2308f8;
  },
  setPageData() {
    _0x36476b.pageData.url = location.href;
    _0x36476b.pageData.kcid = _0x36476b.getUrlParam("courseid");
    if (!_0x36476b.pageData.kcid) {
      _0x36476b.pageData.kcid = _0x36476b.getUrlParam("courseId");
    }
    console.log("==========初始化完成：" + _0x36476b.pageData.url + "============");
  },
  changeReactInputValue(_0x4a6194, _0x3f3e49) {
    let _0x155a74 = _0x4a6194.value;
    _0x4a6194.value = _0x3f3e49;
    let _0x5ba526 = new Event("input", {
      bubbles: true
    });
    _0x5ba526.simulated = true;
    let _0x4e8544 = _0x4a6194._valueTracker;
    if (_0x4e8544) {
      _0x4e8544.setValue(_0x155a74);
    }
    _0x4a6194.dispatchEvent(_0x5ba526);
  },
  intervalUrlTemp() {
    let _0x2d1d3f = "";
    setInterval(() => {
      let _0x385bb2 = location.href;
      if (_0x2d1d3f == _0x385bb2) {
        return;
      }
      _0x2d1d3f = _0x385bb2;
      if (!(_0x385bb2.indexOf("dashboard/merch-picking-hall/merch_promoting") != -1)) {
        _0x385bb2.indexOf("mpa/pigeonIM") != -1;
      }
    }, 500);
  },
  mouseEventTemp(_0x10c205, _0x16c581) {
    let _0x394fde = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      clientX: 0,
      clientY: 0
    });
    $jq(".auxo-dropdown-trigger").eq(1).get(0).dispatchEvent(_0x394fde);
  },
  waitTimeout(_0x16e5c1) {
    return new Promise((_0x31256c, _0x4ae0ca) => {
      setTimeout(() => {
        _0x31256c();
      }, _0x16e5c1);
    });
  },
  waitOf(_0x3bb51d, _0x2aad90 = 1000, _0x4f733e = 30) {
    console.log("%c waitOf", "background:rgb(0,0,0);color:#fff", _0x3bb51d);
    return new Promise((_0xd46031, _0x1e2d6d) => {
      let _0x55dafe = _0x4f733e * 1000;
      try {
        if (_0x3bb51d()) {
          return _0xd46031();
        }
      } catch (_0x294132) {
        console.error(_0x294132);
      }
      let _0x54f45e = setInterval(() => {
        try {
          if (_0x4f733e != -1) {
            _0x55dafe -= _0x2aad90;
            if (_0x55dafe < 0) {
              clearInterval(_0x54f45e);
              return _0x1e2d6d();
            }
          }
          if (_0x3bb51d()) {
            clearInterval(_0x54f45e);
            return _0xd46031();
          }
        } catch (_0x3dee40) {
          console.error(_0x3dee40);
        }
      }, _0x2aad90);
    });
  },
  toLogin() {
    top.location.href = _0x36476b.url.login + "?yh=" + window.btoa(encodeURI(top.location.href));
  },
  confirmRun(_0x35cc8f = "脚本：3秒后执行下一步操作", _0x86df96 = 3000) {
    return new Promise((_0x20af2d, _0x548667) => {
      let _0x140d37 = true;
      clearTimeout(_0x36476b.pageData.confirmRunIndex);
      _0x36476b.pageData.confirmRunIndex = layer.alert(_0x35cc8f, {
        icon: 3,
        title: "是否继续？",
        btn: ["取消执行"],
        offset: "100px"
      }, function (_0x46ae05) {
        _0x140d37 = false;
        _0x548667();
        layer.close(_0x36476b.pageData.confirmRunIndex);
      });
      setTimeout(() => {
        layer.close(_0x36476b.pageData.confirmRunIndex);
        _0x20af2d(true);
      }, _0x86df96);
    });
  },
  gmAuthGet(_0x4fc193, _0x4e9358, _0x6a8823 = {
    showErr: true
  }) {
    _0x4fc193 = _0x36476b.fullUrl(_0x4fc193);
    console.log("gmGet", _0x4fc193);
    return new Promise((_0x1f5438, _0x340918) => {
      if (_0x4fc193.indexOf("?") != -1) {
        for (key in _0x4e9358) {
          _0x4fc193 += "&" + key + "=" + _0x4e9358[key];
        }
      } else {
        let _0x50e57c = true;
        for (key in _0x4e9358) {
          _0x4fc193 += (_0x50e57c ? "?" : "&") + (key + "=" + _0x4e9358[key]);
          _0x50e57c = false;
        }
      }
      let _0x2e300a = {};
      if (_0x36476b.getGMData("token", "")) {
        _0x2e300a["X-Access-Token"] = _0x36476b.getGMData("token", "");
      }
      GM_xmlhttpRequest({
        method: "get",
        url: _0x4fc193,
        data: _0x4e9358,
        headers: _0x2e300a,
        responseType: "json",
        onload: function (_0x35c2e7) {
          console.log(_0x35c2e7);
          let _0x4e9358 = _0x35c2e7.response;
          if (_0x4e9358.code != 200) {
            if (_0x4e9358.message.indexOf("Token失效") != -1) {
              layer.alert("登录信息过期，3秒后自动前往登录页面");
              setTimeout(() => {
                _0x36476b.toLogin();
              }, 3000);
            } else {
              if (_0x6a8823.showErr) {
                layer.alert(_0x4e9358.message);
              }
            }
            _0x340918(_0x4e9358);
          } else {
            _0x1f5438(_0x4e9358.result);
          }
        },
        onerror: function (_0x11b44d) {
          console.log(_0x11b44d);
          _0x340918(_0x11b44d);
        }
      });
    });
  },
  getUserName() {
    return _0x36476b.getGMData("username", "");
  },
  getGMKey(_0xfc5dc7) {
    return _0xfc5dc7;
    let _0x3d68bc = localStorage.getItem("ZFK_KEYPREFIX");
    if (!_0x3d68bc) {
      _0x3d68bc = _0x36476b.generateRandomString(10);
      localStorage.setItem("ZFK_KEYPREFIX", _0x3d68bc);
    }
    let _0x561dff = ["token"];
    if (_0x561dff.includes(_0xfc5dc7)) {
      return _0xfc5dc7;
    }
    return _0x3d68bc + "_";
  },
  setGMData(_0x494a83, _0x4843c0) {
    return GM_setValue(_0x36476b.getGMKey(_0x494a83), _0x4843c0);
  },
  getUrlParam(_0x4d8159, _0x288b8d) {
    if (arguments.length == 1) {
      _0x288b8d = _0x4d8159;
      _0x4d8159 = window.location;
    }
    var _0x576fa3 = new RegExp("(^|&)" + _0x288b8d + "=([^&]*)(&|$)");
    var _0xdde281 = _0x4d8159.search.substr(1).match(_0x576fa3);
    if (_0xdde281 != null) {
      return unescape(_0xdde281[2]);
    }
    return "";
  },
  toUserNamePage() {
    layer.open({
      type: 1,
      title: "脚本启动失败",
      content: "<div style=\"padding:10px\">脚本启动失败，请按脚本说明文档，请在指定的【启动页面】刷新页面后启动脚本</div>",
      offset: "100px",
      area: ["400px", "180px"],
      btn: ["查看脚本说明文档", "关闭"],
      yes: function (_0x526131) {
        window.open(_0x5b2bc5);
        return false;
      }
    });
    return;
  },
  callAuthSuccess() {
    _0x36476b.setGMData("authSuccess", _0x36476b.now());
  },
  initBuyAuth() {
    if (!_0x36476b.pageData.authListnerIndex) {
      _0x36476b.pageData.authListnerIndex = GM_addValueChangeListener("authSuccess", function (_0x26af89, _0x2e6c60, _0x1d6125, _0x3017f6) {
        if (_0x3017f6) {
          layer.close(_0x36476b.pageData.myInfoIndex);
          layer.close(_0x36476b.pageData.noAuthIndex);
          layer.open({
            type: "1",
            offset: "100px",
            title: "脚本授权提示",
            content: "<div style=\"padding:16px;font-size:20px;\">😃授权购买成功，刷新页面后授权生效</div>"
          });
        }
      });
    }
    if (!_0x36476b.buyAuthFun) {
      _0x36476b.buyAuthFun = function () {
        let _0x546481 = "https://m.zhanyc.cn";
        _0xe0fc32 && (_0x546481 = "http://localhost:3000");
        window.open(_0x546481 + "/yh-auth?i=" + baseConfig.project.id + "&t=" + _0x36476b.getGMData("token"));
      };
    }
  },
  myInfo() {
    _0x36476b.initBuyAuth();
    _0x36476b.gmAuthPost("/yh/user/myInfo").then(_0x7da94b => {
      if (_0xe0fc32) {
        console.log(_0x7da94b);
      }
      let _0x3a8ec0 = "脚本ID：【" + baseConfig.project.id + "】 脚本账号昵称：【" + _0x7da94b.name + "】 脚本账号：【" + _0x7da94b.acc + "】";
      let _0x58ff40 = "\n        <div class=\"p-10 zfk-container\" style=\"padding: 10px;\">\n        <div class=\"kv\" style=\"text-align: center;color: #ffffff;background: #38a1ff;font-weight: bold;margin: -10px -10px 10px;\">" + (_0x36476b.setting.tjjl || "") + "</div>\n        <div class=\"kv\"><label>脚本ID：</label><span>【" + baseConfig.project.id + "】</span></div>\n        <div class=\"kv\"><label>脚本账号昵称：</label><span>【" + _0x7da94b.name + "】</span></div>\n        <div class=\"kv\"><label>脚本账号：</label><span>【" + _0x7da94b.acc + "】</span></div>\n\n        <div class=\"kv\" style=\"text-align: center;margin: 10px 0 20px;\">\n          <button onclick=\"zfk.buyAuthFun()\" style=\"cursor: pointer;background:#BE2EDD;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">自助购买授权（👍推荐）</button>\n          <button onclick=\"zfk.setClip('" + _0x3a8ec0 + "')\" style=\"cursor: pointer;background:#34495E;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">点这里复制以上信息</button>\n        </div>\n        <div class=\"kv\" style=\"text-align: center;\">\n          <button onclick=\"window.open('https://www.todesk.com/download.html')\" style=\"cursor: pointer;background:#009349;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">下载远程控制软件（需要协助才下载）</button>\n          <button onclick=\"zfk.logout()\" style=\"cursor: pointer;background:#FF6B81;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">退出脚本账号</button>\n        </div>\n\n        </div>\n        ";
      _0x36476b.pageData.myInfoIndex = layer.open({
        type: "1",
        title: "脚本信息",
        content: _0x58ff40,
        area: ["460px", "300px"],
        offset: "100px"
      });
    });
  },
  tipsLogin(_0x26a40b = "【未登录】脚本需要付费后才可使用。点击[确定]按钮将前往[脚本账号]的注册/登录页面") {
    layer.open({
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x26a40b + "</div>",
      title: "使用脚本前请先登录脚本账号！",
      offset: "100px",
      btn: ["去登录", "查看授权说明", "关闭"],
      yes: function (_0x42233e) {
        layer.close(_0x42233e);
        _0x36476b.pageData.loginTipsIndex = layer.alert("已经为您打开登录页面，请留意浏览器窗口");
        _0x36476b.toLogin();
      },
      btn2: function (_0xe21317) {
        window.open("https://doc.zhanyc.cn/pages/auth/");
        return false;
      },
      btn2function(_0xb24489) {
        layer.close(_0xb24489);
      }
    });
  },
  gmAuthPost(_0xbe46a0, _0x111324 = {}, _0x4df7f8 = {
    showErr: true
  }) {
    _0xbe46a0 = _0x36476b.fullUrl(_0xbe46a0);
    if (_0xe0fc32) {
      console.log("gmPost", _0xbe46a0);
    }
    let _0x4c6d1e = {
      "Content-Type": "application/json"
    };
    if (_0x36476b.getGMData("token", "")) {
      _0x4c6d1e["X-Access-Token"] = this.getGMData("token", "");
    }
    return new Promise((_0x1b8e8b, _0xb4df1) => {
      GM_xmlhttpRequest({
        method: "post",
        url: _0xbe46a0,
        data: JSON.stringify(_0x111324),
        headers: _0x4c6d1e,
        responseType: "json",
        onload: function (_0x8d5a85) {
          if (_0xe0fc32) {
            console.log(_0x8d5a85);
          }
          let _0x111324 = _0x8d5a85.response;
          try {
            if (typeof _0x111324 == "string") {
              _0x111324 = JSON.parse(_0x111324);
            }
          } finally {}
          if (_0x111324.message.indexOf("Token失效") != -1) {
            _0x36476b.tipsLogin();
            return;
          }
          if (_0x111324.code != 200) {
            if (_0x4df7f8.showErr) {
              if (_0x111324.message.startsWith("脚本需收费授权使用")) {
                _0x36476b.initBuyAuth();
                _0x36476b.pageData.noAuthIndex = layer.open({
                  type: "1",
                  content: "<div style=\"padding:14px;\">" + _0x111324.message + "</div>",
                  icon: 3,
                  title: "当前学生账号未授权",
                  offset: "100px",
                  btn: ["去购买授权", "查看授权信息", "查看帮助"],
                  yes: function (_0x3b527d) {
                    _0x36476b.buyAuthFun();
                  },
                  btn2: function (_0x37d8d7) {
                    _0x36476b.myInfo();
                  },
                  btn3: function (_0x4cf32c) {
                    top.open("http://doc.zhanyc.cn/pages/auth/");
                    return false;
                  }
                });
              } else {
                layer.alert(_0x111324.message, {
                  offset: "100px"
                }, function () {
                  _0x36476b.myInfo();
                });
              }
            }
            _0xb4df1(_0x111324);
          } else {
            _0x1b8e8b(_0x111324.result);
          }
        },
        onerror: function (_0x1474cc) {
          if (_0xe0fc32) {
            console.log(_0x1474cc);
          }
          _0xb4df1(_0x1474cc);
        }
      });
    });
  },
  gmAuthDownScore(_0x561db4, _0x32ecd4 = true) {
    return new Promise((_0x57db37, _0x4fbc22) => {
      if (_0x36476b.isDZKFMode() || _0x1f5d4f) {
        return _0x57db37(true);
      }
      if (typeof _0x36476b.pageData.downSuccess !== "undefined" && _0x36476b.pageData.downSuccess.includes(_0x561db4) && _0x36476b.pageData.downSuccessUserName == _0x36476b.getUserName()) {
        return _0x57db37(true);
      } else {
        if (typeof _0x36476b.pageData.downError !== "undefined" && _0x36476b.pageData.downError.includes(_0x561db4)) {
          return _0x4fbc22(false);
        }
      }
      var _0x77586d = _0x36476b.getUserName();
      if (!_0x77586d) {
        _0x36476b.toUserNamePage();
        return;
      }
      _0x36476b.gmAuthPost("/yh/price/down", {
        id: _0x561db4,
        key: _0x77586d
      }, {
        showErr: _0x32ecd4
      }).then(_0x3c73f8 => {
        if (_0x36476b.pageData) {
          if (!_0x36476b.pageData.downSuccess) {
            _0x36476b.pageData.downSuccess = [];
          }
          _0x36476b.pageData.downSuccess.push(_0x561db4);
          _0x36476b.pageData.downSuccessUserName = _0x77586d;
        }
        _0x57db37(true);
      }, _0x199f28 => {
        if (!_0x36476b.pageData.downError) {
          _0x36476b.pageData.downError = [];
        }
        _0x36476b.pageData.downError.push(_0x561db4);
        _0x4fbc22(_0x199f28);
      });
    });
  },
  isDZKFMode() {
    let _0x2e8541 = typeof loadFun == "function" && loadFun.toString().includes("var data = res.response;");
    if (!_0x2e8541) {
      _0x2e8541 = typeof isDZKF == "boolean" && !!isDZKF;
    }
    return _0x2e8541;
  },
  alertMsg(_0x47a830, _0x1660b7 = 0) {
    return layer.open({
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x47a830 + "</div>",
      title: "脚本提示" + (_0x1660b7 == 0 ? "" : "（" + (_0x1660b7 / 1000).toFixed(2) + "秒后自动关闭本提示}）"),
      offset: "100px",
      time: _0x1660b7,
      btn: "关闭"
    });
  },
  tipsMsg(_0xb0d415, _0x10e195 = 3000) {
    return layer.msg(_0xb0d415, {
      offset: "100px",
      time: _0x10e195
    });
  },
  confirmMsg(_0x357340 = "请确认", _0x17f4e0 = {}) {
    let _0x1a45ff = {
      title: "脚本提示",
      btn: ["确定", "关闭"],
      fun1(_0x5905cd) {
        layer.close(_0x5905cd);
      },
      fun2() {},
      fun3() {}
    };
    Object.assign(_0x1a45ff, _0x17f4e0);
    return layer.open({
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x357340 + "</div>",
      title: _0x17f4e0.title,
      offset: "100px",
      btn: _0x1a45ff.btn,
      yes: _0x1a45ff.fun1,
      btn2: _0x1a45ff.fun2,
      btn3: _0x1a45ff.fun3
    });
  },
  async openLjTips(_0x2e9e9 = true, _0x5e0a88 = false, _0x5ef91f = 5000) {
    return new Promise((_0x485757, _0x2543d9) => {
      let _0x525fb9 = layer.open({
        type: 1,
        title: "请确认",
        offset: "100px",
        content: "\n      <div style=\"padding:10px\">\n      <p>已经为你打开下一门课程，如果没有打开窗口，请检查浏览器地址栏左右两侧是否有拦截提示，请选择【永久允许】。如不可见，请刷新下浏览器在3秒提示后再看地址栏左右两侧</p>\n      <p style=\"color:red;\">如下图所示：</p>\n      <img src=\"https://js.zhanyc.cn/img/ljts.jpg\"/>\n      </div>\n      "
      });
      let _0x1cd6f0 = _0x5e0a88 ? location.href : "";
      GM_addValueChangeListener(_0x36476b.getGMKey("closeLJTS"), function (_0x41e159, _0x5da256, _0x24708e, _0x2cd39b) {
        layer.close(_0x525fb9);
        _0x2e9e9 && _0x36476b.tipsAndClose(_0x1cd6f0, _0x5ef91f);
        return _0x485757();
      });
    });
  },
  tipsAndClose(_0x25e368, _0x377b64 = 5000) {
    _0x36476b.confirmRun((_0x377b64 / 1000).toFixed(2) + "秒后关闭当前页面", _0x377b64).then(_0x4bceeb => {
      if (!_0x25e368 || location.href == _0x25e368) {
        window.close();
      }
    });
  },
  closeWaitConfrimWin() {
    _0x36476b.setGMData("closeLJTS", _0x36476b.now());
  },
  getQuestionType(_0x5d7a90) {
    var _0x183beb = "";
    switch (_0x5d7a90) {
      case "[单选题]":
        _0x183beb = "1";
        break;
      case "[判断题]":
        _0x183beb = "3";
        break;
    }
    return _0x183beb;
  },
  checkLogin() {
    if (_0x1f5d4f) {
      _0x36476b.begin();
      return;
    }
    if (location.href.indexOf("m.zhanyc.cn") != -1) {
      return;
    }
    _0x36476b.gmAuthPost("/yh/price/check").then(_0x58f001 => {
      if (_0x58f001) {
        _0x36476b.begin();
      }
    });
  },
  hold() {
    setInterval(() => {
      _0x36476b.gmAuthPost("/yh/price/hold").then(_0x396e15 => {});
    }, 600000);
  },
  getConfig() {
    let _0x232d6c = GM_getValue("config", {});
    let _0x51722e = {};
    _0x232d6c = Object.assign(_0x51722e, _0x232d6c);
    return _0x232d6c;
  },
  setConfig(_0x66aa40, _0x594ed5 = "") {
    console.log("setConfig" + _0x594ed5, JSON.stringify(_0x66aa40));
    GM_setValue("config", _0x66aa40);
  },
  fullUrl(_0x29b38b, _0x346a80 = "") {
    if (!_0x346a80) {
      _0x346a80 = _0x36476b.url.base;
    }
    if (!_0x29b38b.startsWith("http")) {
      return _0x346a80 + _0x29b38b;
    }
    return _0x29b38b;
  },
  getPromiseWithAbort(_0x5910f5) {
    let _0x527566 = {};
    let _0x5446aa = new Promise(function (_0x5c689e, _0x55b277) {
      _0x527566.abort = _0x55b277;
    });
    _0x527566.promise = Promise.race([_0x5910f5, _0x5446aa]);
    return _0x527566;
  },
  addValueChangeTempate() {
    GM_removeValueChangeListener(_0x36476b.pageData.valueChangeIndex.list);
    _0x36476b.pageData.valueChangeIndex.list = GM_addValueChangeListener("zfk_mark_brand", function (_0x16f957, _0x240ef5, _0x4cb3a1, _0x39a41b) {
      console.log("zfk_mark_brand", arguments);
      if (_0x4cb3a1 == "") {
        return;
      }
    });
  },
  matchReg(_0x40392f, _0x5c934a) {},
  matchUrl(_0x364a47, _0x2c1c78 = "like", _0x281ecb = location.href.toLocaleLowerCase()) {
    let _0x300f84 = false;
    switch (_0x2c1c78) {
      case "eq":
        _0x300f84 = _0x364a47.toLocaleLowerCase() == _0x281ecb;
        break;
      case "like":
        _0x300f84 = _0x281ecb.indexOf(_0x364a47.toLocaleLowerCase()) != -1;
        break;
      case "left":
        _0x300f84 = _0x281ecb.startsWith(_0x364a47.toLocaleLowerCase());
        break;
      case "right":
        _0x300f84 = _0x281ecb.endsWith(_0x364a47.toLocaleLowerCase());
        break;
    }
    return _0x300f84;
  },
  page_yhwelcome() {
    console.log("%c page_yhwelcome", "background:rgb(255,0,0);color:#fff");
    let _0x490fcf = setInterval(() => {
      if (location.href.search("yhwelcome") != -1) {
        clearInterval(_0x490fcf);
        var _0x3860ed = JSON.parse(localStorage.getItem("pro__Access-Token")).value;
        _0x36476b.setGMData("token", _0x3860ed);
        _0x36476b.setGMData("login", {
          login: true,
          time: _0x36476b.now()
        });
      }
    }, 500);
  },
  page_yhwelcome2() {
    console.log("%c page_yhwelcome", "background:rgb(255,0,0);color:#fff");
    var _0x14d397 = sessionStorage.getItem("token");
    _0x36476b.setGMData("token", _0x14d397);
    _0x36476b.setGMData("login", {
      login: true,
      time: _0x36476b.now()
    });
  },
  gmGet(_0x592958, _0x25a0f3) {
    console.log("gmGet", _0x592958);
    if (_0x592958.indexOf("?") != -1) {
      for (key in _0x25a0f3) {
        _0x592958 += "&" + key + "=" + _0x25a0f3[key];
      }
    } else {
      let _0x504a01 = true;
      for (key in _0x25a0f3) {
        _0x592958 += (_0x504a01 ? "?" : "&") + (key + "=" + _0x25a0f3[key]);
        _0x504a01 = false;
      }
    }
    return new Promise((_0x5337b8, _0x32962e) => {
      GM_xmlhttpRequest({
        method: "get",
        url: _0x592958,
        data: _0x25a0f3,
        headers: {},
        responseType: "json",
        onload: function (_0x53a895) {
          let _0x25a0f3 = _0x53a895.response;
          console.log(_0x25a0f3);
          _0x5337b8(_0x25a0f3);
        },
        onerror: function (_0x5a86b7) {
          console.log(_0x5a86b7);
          _0x32962e(_0x5a86b7);
        }
      });
    });
  },
  parseQueryString(_0x159dbd) {
    _0x159dbd = !_0x159dbd ? window.location.href : _0x159dbd;
    if (_0x159dbd.indexOf("?") === -1) {
      return {};
    }
    let _0x32c439 = _0x159dbd[0] === "?" ? _0x159dbd.substr(1) : _0x159dbd.substring(_0x159dbd.lastIndexOf("?") + 1);
    if (_0x32c439 === "") {
      return {};
    }
    _0x32c439 = _0x32c439.split("&");
    let _0x71d18e = {};
    for (let _0xb19e66 = 0; _0xb19e66 < _0x32c439.length; _0xb19e66++) {
      let _0x5dc4e0 = _0x32c439[_0xb19e66].split("=");
      _0x71d18e[decodeURIComponent(_0x5dc4e0[0])] = decodeURIComponent(_0x5dc4e0[1] || "");
    }
    return _0x71d18e;
  },
  gmPost(_0x34dcf9, _0x42fe06) {
    console.log("gmPost", _0x34dcf9);
    _0x34dcf9 = _0x36476b.fullUrl(_0x34dcf9);
    return new Promise((_0x29a721, _0x2fb0d5) => {
      GM_xmlhttpRequest({
        method: "post",
        url: _0x34dcf9,
        data: JSON.stringify(_0x42fe06),
        headers: {
          "Content-Type": "application/json"
        },
        responseType: "json",
        onload: function (_0x1aba21) {
          let _0x42fe06 = _0x1aba21.response;
          console.log(_0x42fe06);
          _0x29a721(_0x42fe06);
        },
        onerror: function (_0x2fe3e1) {
          console.log(_0x2fe3e1);
          _0x2fb0d5(_0x2fe3e1);
        }
      });
    });
  },
  triggerInputEvent() {
    let _0x5a3d75 = document.createEvent("HTMLEvents");
    _0x5a3d75.initEvent("input", true, true);
    $jq("#TeamName").val("团队1233123").get(0).dispatchEvent(_0x5a3d75);
  },
  addJS(_0x4510d8) {
    let _0x3c9e9c = document.createElement("script");
    _0x3c9e9c.setAttribute("type", "text/javascript");
    _0x3c9e9c.setAttribute("src", _0x4510d8);
    document.body.insertBefore(_0x3c9e9c, document.body.lastChild);
  },
  AddCss(_0xba4ddc) {
    var _0x522fe1 = document.getElementsByTagName("head")[0];
    var _0x8fada1 = document.createElement("link");
    _0x8fada1.rel = "stylesheet";
    _0x8fada1.href = _0xba4ddc;
    _0x522fe1.appendChild(_0x8fada1);
  },
  logResult() {
    console.log(GM_getValue("zfk_jl_result", []));
  },
  getGMData(_0x5b264a, _0x2fa008) {
    return GM_getValue(_0x5b264a, _0x2fa008);
  },
  setGMData(_0xbc9f5c, _0x3ee843) {
    return GM_setValue(_0xbc9f5c, _0x3ee843);
  },
  delGMData(_0x2b7f27, _0x19134d) {
    return GM_deleteValue(_0x2b7f27);
  },
  setPageData() {
    this.pageData.url = location.href;
  },
  closeConfig() {
    layer.closeAll();
  },
  HTMLEncode(_0x391023) {
    var _0x50a7af = document.createElement("div");
    _0x50a7af.textContent != null ? _0x50a7af.textContent = _0x391023 : _0x50a7af.innerText = _0x391023;
    var _0x3f2c3f = _0x50a7af.innerHTML;
    _0x50a7af = null;
    return _0x3f2c3f;
  },
  HTMLDecode(_0x205275) {
    if (!_0x205275) {
      return "";
    }
    if (_0x205275.length > 2 && _0x205275.substr(0, 1) == "<" && _0x205275.substr(_0x205275.length - 1, 1) == ">") {
      return _0x205275;
    } else {
      var _0x39b3d6 = document.createElement("div");
      _0x39b3d6.innerHTML = _0x205275;
      var _0x1a65c3 = _0x39b3d6.innerText || _0x39b3d6.textContent;
      _0x39b3d6 = null;
      return _0x1a65c3;
    }
  },
  isRichText(_0x11286b) {
    if (!_0x11286b) {
      return false;
    }
    var _0x4e89ca = document.createElement("div");
    _0x4e89ca.innerHTML = _0x11286b;
    var _0x313de1 = _0x4e89ca.innerText.length != _0x11286b.length;
    _0x4e89ca = null;
    return _0x313de1;
  },
  getSimpleText(_0x148a7a) {
    if (!_0x148a7a) {
      return "";
    }
    var _0x279b0f = this.HTMLDecode(_0x148a7a);
    var _0x5639f5 = document.createElement("div");
    _0x5639f5.innerHTML = _0x279b0f;
    var _0x1e7d9a = _0x5639f5.innerText || _0x5639f5.textContent;
    _0x5639f5 = null;
    return _0x1e7d9a;
  },
  now() {
    return new Date().getTime();
  },
  downloadTxt(_0xa0f4e8, _0x436609) {
    var _0x388195 = document.createElement("a");
    _0x388195.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(_0x436609));
    _0x388195.setAttribute("download", _0xa0f4e8);
    _0x388195.style.display = "none";
    document.body.appendChild(_0x388195);
    _0x388195.click();
    document.body.removeChild(_0x388195);
  },
  dateFormat(_0x517f53 = new Date(), _0x169840 = "yyyy-MM-dd HH:mm") {
    let _0x2ed860;
    if (typeof _0x517f53 === "number") {
      _0x517f53 = new Date(_0x517f53);
    }
    const _0x2b8ecb = {
      "y+": _0x517f53.getFullYear().toString(),
      "M+": (_0x517f53.getMonth() + 1).toString(),
      "d+": _0x517f53.getDate().toString(),
      "H+": _0x517f53.getHours().toString(),
      "m+": _0x517f53.getMinutes().toString(),
      "s+": _0x517f53.getSeconds().toString()
    };
    for (let _0x15cf22 in _0x2b8ecb) {
      _0x2ed860 = new RegExp("(" + _0x15cf22 + ")").exec(_0x169840);
      if (_0x2ed860) {
        _0x169840 = _0x169840.replace(_0x2ed860[1], _0x2ed860[1].length == 1 ? _0x2b8ecb[_0x15cf22] : _0x2b8ecb[_0x15cf22].padStart(_0x2ed860[1].length, "0"));
      }
    }
    return _0x169840;
  }
});
_0x36476b.setGMData("version", _0x36476b.setting.version.version);
_0x36476b.init();
unsafeWindow.zfk = _0x36476b;
(function (_0x434c7d, _0x4e1ab9, _0xeef93a) {
  var _0x90eec9 = function () {
    var _0x392e1c = true;
    return function (_0xb5082, _0x4f0711) {
      var _0x403089 = _0x392e1c ? function () {
        if (_0x4f0711) {
          var _0x70f70a = _0x4f0711.apply(_0xb5082, arguments);
          _0x4f0711 = null;
          return _0x70f70a;
        }
      } : function () {};
      _0x392e1c = false;
      return _0x403089;
    };
  }();
  var _0x4ecbce = _0x90eec9(this, function () {
    var _0x2d1221 = function () {
        return "dev";
      },
      _0x259552 = function () {
        return "window";
      };
    var _0x44801f = function () {
      var _0xb28bc8 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0xb28bc8.test(_0x2d1221.toString());
    };
    var _0xbaaeb9 = function () {
      var _0x392da9 = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x392da9.test(_0x259552.toString());
    };
    var _0x43f780 = function (_0x14a554) {
      var _0x1bb0c3 = ~-1 >> NaN;
      if (_0x14a554.indexOf("i" === _0x1bb0c3)) {
        _0x12cde2(_0x14a554);
      }
    };
    var _0x12cde2 = function (_0x32fa1a) {
      var _0x26ca01 = ~-4 >> NaN;
      if (_0x32fa1a.indexOf((true + "")[3]) !== _0x26ca01) {
        _0x43f780(_0x32fa1a);
      }
    };
    if (!_0x44801f()) {
      if (!_0xbaaeb9()) {
        _0x43f780("indеxOf");
      } else {
        _0x43f780("indexOf");
      }
    } else {
      _0x43f780("indеxOf");
    }
  });
  _0x4ecbce();
  _0xeef93a = "al";
  try {
    _0xeef93a += "ert";
    _0x4e1ab9 = encode_version;
    if (!(typeof _0x4e1ab9 !== "undefined" && _0x4e1ab9 === "jsjiami.com.v5")) {
      _0x434c7d[_0xeef93a]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x1daaf8) {
    _0x434c7d[_0xeef93a]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";