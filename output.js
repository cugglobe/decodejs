//4/28/2025, 6:22:33 PM
//Project:https://github.com/dream385/decode
let _0x5d550b = "http://doc.zhanyc.cn/pages/zggbwlxy/";
let _0x368bdd = true;
let _0x706d8e = true;
let _0x13b3e6 = true;
_0x368bdd = false;
_0x706d8e = false;
_0x13b3e6 = false;
const _0x4f429b = {
  version: "202504101508",
  body: "<div style=\"padding:10px;\">第一版本</div>"
};
const _0x508481 = {
  tjjl: "推荐购买脚本，返佣40%",
  version: _0x4f429b
};
const _0x1b663d = {
  list: null
};
const _0x18eeec = {
  index: null
};
const _0x488a39 = {
  title: "深入学习贯彻习近平新时代中国特色社会主义思想专栏",
  list: ["https://cela.gwypx.com.cn/portal/playnew.do?menu=course&id=73118336&year=", "aaa"]
};
const _0x281f66 = {
  confirmRunIndex: null,
  userNameIndex: null,
  page_playcourseIndex: null,
  waitTime: 0,
  index: _0x1b663d,
  video: _0x18eeec,
  ztList: [_0x488a39]
};
const _0x4179e7 = {
  showErr: true
};
const _0x5d967e = {
  showErr: true
};
const _0x445b35 = {
  showErr: true
};
let _0x4906ec = Object.assign(baseConfig, {
  setting: _0x508481,
  pageData: _0x281f66,
  openDoc() {
    window.open(_0x5d550b);
  },
  async init() {
    console.log("%c init", "background:rgb(0,0,0);color:#fff");
    if (unsafeWindow.window === unsafeWindow.top) {
      _0x4906ec.addMenu();
      _0x4906ec.registerMenuCommandTemplate();
    }
    this.addStyle();
    if (location.href.indexOf("loginSuccess.html?yh=") != -1) {
      console.log("%c loginSuccess.html?yh", "background:rgb(255,0,0);color:#fff");
      _0x4906ec.page_yhwelcome();
    }
    let _0x40d782 = await _0x4906ec.checkVersion();
    if (!_0x40d782) {
      return;
    }
    let _0x16a004 = location.href;
    setInterval(async () => {
      if (_0x16a004 != location.href) {
        _0x16a004 = location.href;
        _0x4906ec.runByUrl(location.href);
      }
    }, 500);
    _0x4906ec.runByUrl(location.href);
  },
  async addMenu() {
    await _0x4906ec.waitOf(_0x5aa0fa => $("body:visible").length > 0);
    if ($("#zfkLeftMenuContainer").length > 0) {
      return;
    }
    GM_addStyle("#zfkLeftMenuContainer{z-index:9999;position:fixed;left:0;top:40%;color:#fff;box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;animation:glowAnimation 3s infinite alternate;}@keyframes glowAnimation{0%{box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;}20%{box-shadow:0 0 15px #ff66cc,0 0 25px #ff66cc,0 0 35px #ff66cc;}40%{box-shadow:0 0 10px #ffcc33,0 0 20px #ffcc33,0 0 30px #ffcc33;}60%{box-shadow:0 0 15px #66ff66,0 0 25px #66ff66,0 0 35px #66ff66;}80%{box-shadow:0 0 10px #3399ff,0 0 20px #3399ff,0 0 30px #3399ff;}100%{box-shadow:0 0 10px #fffb00,0 0 20px #fffb00,0 0 30px #fffb00;}}#zfkLeftMenuContainer .zfkLeftMenuStep{position:absolute;background:#3498db;width:max-content;top:-35px;display:block;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu{background:rgba(0,0,0,0.4);border-radius:0 4px 4px 0;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu:hover .zfkLeftMenuBtn-titile{width:auto}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtn-titile{cursor:pointer;word-wrap:break-word;width:1em;display:inline-block}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl{display:none;margin:0 -6px;box-sizing:border-box}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li{list-style:none;color:#fff !important;cursor:pointer;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li:hover{background:#000}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li::before{content:\"+ \"}#zfkIp51Config{padding:10px}#zfkLeftMenuContainer *{font-size:14px}");
    $("<div id=\"zfkLeftMenuContainer\">\n      <div class=\"zfkLeftMenu\">\n        <span class=\"zfkLeftMenuBtn-titile\">菜单</span>\n        <ul class=\"zfkLeftMenuBtnUl\">\n        </ul>\n  \n      </div>\n      </div>").appendTo("body");
    $(".zfkLeftMenu").hover(() => {
      $(".zfkLeftMenuBtnUl").show();
    }, () => {
      $(".zfkLeftMenuBtnUl").hide();
    });
  },
  async runByUrl(_0x3cb48f) {
    if (_0x4906ec.matchUrl("dsfa/nc/pc/main/views/main.html")) {
      _0x4906ec.setUserName();
      return;
    }
    if (_0x4906ec.matchUrl("student/class_myNotFinishClassList.do")) {
      _0x4906ec.setUserName2();
      return;
    }
    if (_0x4906ec.matchUrl("dsfa/nc/ztzl/ztzxkc/views/xisijuan.html")) {
      _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455").then(_0x597e44 => {
        _0x4906ec.page_list();
      });
    } else {
      if (_0x4906ec.matchUrl("course/views/course.html")) {
        _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455").then(_0x9f0273 => {
          _0x4906ec.page_video();
        });
      } else {
        if (_0x4906ec.matchUrl("/student/class_detail_course.do")) {
          await _0x4906ec.setUserName2();
          _0x4906ec.page_class_detail_course();
        } else {
          if (_0x4906ec.matchUrl("/portal/course_detail.do")) {
            _0x4906ec.page_course_detail();
          } else {
            if (_0x4906ec.matchUrl("/portal/playcourse.do?")) {
              _0x4906ec.page_playcourse();
            } else {
              if (_0x4906ec.matchUrl("/home/personal/index")) {
                _0x4906ec.setUserName_page_personal();
              } else {
                if (_0x4906ec.matchUrl("/portal/special_recommend_hot.do?")) {
                  _0x4906ec.page_special_recommend_hot();
                } else {
                  if (_0x4906ec.matchUrl("course_myselect.do?") || _0x4906ec.matchUrl("/course_myrequired.do?") || _0x4906ec.matchUrl("/student/my_course.do?")) {
                    await _0x4906ec.setUserName3();
                    _0x4906ec.page_list2();
                  } else {
                    if (_0x4906ec.matchUrl("/views/specialDetail.html?")) {
                      await _0x4906ec.setUserName();
                      _0x4906ec.page_list3();
                    } else {
                      if (_0x4906ec.matchUrl("/pdchanel/specialdetail?")) {
                        _0x4906ec.page_list_specialdetail();
                      } else {
                        if (_0x4906ec.matchUrl("/home/default")) {
                          await _0x4906ec.setUserName_homeDefault();
                          _0x4906ec.tipsMsg("脚本初始化完毕");
                        } else {
                          if (_0x4906ec.matchUrl("/pagecourse/coursePlayer?")) {
                            _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455").then(_0xe520b0 => {
                              _0x4906ec.page_video();
                            });
                          } else {
                            if (_0x4906ec.matchUrl("/nc/pagespecial/specialDetail?")) {
                              await _0x4906ec.setUserName_http();
                              _0x4906ec.page_list4();
                            } else {
                              if (_0x4906ec.matchUrl("class/detail")) {
                                await _0x4906ec.setUserName_http();
                                _0x4906ec.page_list4();
                              } else {
                                if (_0x3cb48f == "https://www.cela.gov.cn/home/" || _0x3cb48f == "https://www.cela.gov.cn/") {
                                  _0x4906ec.setUserName4();
                                } else {
                                  if (_0x3cb48f.includes("/train-new/class-detail/")) {
                                    _0x4906ec.page_listClassDetail();
                                  } else {
                                    if (_0x3cb48f.includes("/study/course/detail/")) {
                                      _0x4906ec.page_video_detail();
                                    } else {
                                      if (_0x3cb48f.includes("/portal/study_play.do?")) {
                                        _0x4906ec.page_video_study_play();
                                      } else {
                                        if (_0x3cb48f.includes("/pageonstudy/studyCenter")) {
                                          await _0x4906ec.setUserName_zggdgb();
                                          _0x4906ec.tipsMsg("手动进入课程章节列表页面后，脚本自动运行");
                                        } else {
                                          if (_0x3cb48f.includes("/pagechannel/channelDetail")) {
                                            _0x4906ec.page_channelDetail();
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  setHook() {
    ah.proxy({
      onRequest: (_0x5f117f, _0x2dc0f9) => {
        console.log(_0x5f117f.url);
        _0x2dc0f9.next(_0x5f117f);
      },
      onError: (_0x3d9a0d, _0xaf8b91) => {
        console.log(_0x3d9a0d.type);
        _0xaf8b91.next(_0x3d9a0d);
      },
      onResponse: (_0xc89d9b, _0x464e4e) => {
        let _0x2c73fe = _0xc89d9b.config.url;
        if (_0x2c73fe.includes("/device/study_sync.do")) {
          debugger;
        }
        console.log(_0xc89d9b.response);
        _0x464e4e.next(_0xc89d9b);
      }
    }, unsafeWindow.window);
  },
  async page_video_study_play() {
    console.log("%c page_video_study_play", "background:rgb(0,0,0);color:#fff");
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    _0x4906ec.closeWaitConfrimWin();
    _0x4906ec.waitOf(_0x2efddd => _0x4906ec.getElByText($(".user_choise"), "继续学习") != null).then(async _0x156ff0 => {
      await _0x4906ec.waitTimeout(500);
      _0x4906ec.getElByText($(".user_choise"), "继续学习").click();
    });
    let _0x56d0d1 = 2;
    let _0x49fe28 = null;
    let _0x9c0444 = 60;
    let _0x2bda83 = _0x9c0444;
    _0x4906ec.closeWaitConfrimWin();
    if (_0x4906ec.pageData.video.index != null) {
      return;
    }
    setTimeout(async () => {
      let _0x41e32a = _0x4906ec.getCurTime();
      await _0x4906ec.waitTimeout(5000);
      if (_0x4906ec.getCurTime() == _0x41e32a) {
        _0x4906ec.confirmRun("貌似卡主了，3秒后刷新页面").then(_0x5251d9 => {
          location.reload();
        });
      }
    }, 60000);
    _0x4906ec.pageData.video.index = setInterval(async () => {
      try {
        if (_0x4906ec.pageData.waitTime > 0) {
          _0x4906ec.pageData.waitTime -= _0x56d0d1;
          return;
        }
        if (!_0x4906ec.getVideo()) {
          console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
          return;
        }
        let _0x18a783 = _0x4906ec.getCurTime();
        if (_0x18a783 == _0x49fe28) {
          _0x49fe28 = _0x4906ec.getCurTime();
          _0x2bda83 -= _0x56d0d1;
          if (_0x2bda83 <= 0) {
            _0x2bda83 = _0x9c0444;
            _0x4906ec.confirmRun("貌似卡死了，前往列表页面").then(_0x5d5605 => {
              location.href = _0x4906ec.getGMData("courseDetailUrl", "/");
            });
            _0x4906ec.pageData.waitTime = 10;
            return;
          }
        } else {
          _0x49fe28 = _0x18a783;
          _0x2bda83 = _0x9c0444;
        }
        _0x4906ec.getVideo().volume = 0;
        let _0x547e89 = "进度：" + _0x4906ec.getCurTime().toFixed(0) + "/" + _0x4906ec.getTotalTime().toFixed(0);
        $("title").text(_0x547e89);
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x19e702 = _0x4906ec.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
        if (_0x19e702 != null) {
          _0x19e702.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
        }
        let _0x1c5869 = await _0x4906ec.isPlayFinish();
        if (_0x1c5869) {
          _0x4906ec.pageData.waitTime = 15;
          const _0x4bde1e = {
            time: 10000
          };
          layer.msg("视频即将结束，等待下一步操作", _0x4bde1e);
          setTimeout(() => {
            _0x4906ec.confirmRun("前往列表页面").then(_0x5aa70d => {
              location.href = _0x4906ec.getGMData("listUrl", "/");
            });
          }, 10000);
          clearInterval(_0x4906ec.pageData.video.index);
          _0x4906ec.pageData.video.index = null;
          return;
        }
        let _0x332b26 = await _0x4906ec.videoIsPlay();
        if (!_0x332b26) {
          if (!_0x1c5869) {
            _0x4906ec.play();
          }
        }
      } catch (_0x5607a5) {
        console.error("视频页面定时器出错", _0x5607a5);
      }
    }, _0x56d0d1 * 1000);
  },
  async page_video_detail() {
    _0x4906ec.closeWaitConfrimWin();
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    console.log("%c page_video_detail", "background:rgb(0,0,0);color:#fff");
    let _0x4c46c4 = 2;
    let _0xa8234 = null;
    let _0x45f727 = 60;
    let _0x9702dc = _0x45f727;
    _0x4906ec.closeWaitConfrimWin();
    if (_0x4906ec.pageData.video.index != null) {
      return;
    }
    setTimeout(async () => {
      let _0x3f6ddc = _0x4906ec.getCurTime();
      await _0x4906ec.waitTimeout(5000);
      if (_0x4906ec.getCurTime() == _0x3f6ddc) {
        _0x4906ec.confirmRun("貌似卡主了，3秒后刷新页面").then(_0x10050d => {
          location.reload();
        });
      }
    }, 60000);
    _0x4906ec.pageData.video.index = setInterval(async () => {
      try {
        if (_0x4906ec.pageData.waitTime > 0) {
          _0x4906ec.pageData.waitTime -= _0x4c46c4;
          return;
        }
        if (!_0x4906ec.getVideo()) {
          console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
          return;
        }
        let _0x8a0248 = _0x4906ec.getCurTime();
        if (_0x8a0248 == _0xa8234) {
          _0xa8234 = _0x4906ec.getCurTime();
          _0x9702dc -= _0x4c46c4;
          if (_0x9702dc <= 0) {
            _0x9702dc = _0x45f727;
            _0x4906ec.confirmRun("貌似卡死了，前往列表页面").then(_0x5a9ba9 => {
              location.href = _0x4906ec.getGMData("listUrl", "/");
            });
            _0x4906ec.pageData.waitTime = 10;
            return;
          }
        } else {
          _0xa8234 = _0x8a0248;
          _0x9702dc = _0x45f727;
        }
        _0x4906ec.getVideo().volume = 0;
        let _0x54e7d = "进度：" + _0x4906ec.getCurTime().toFixed(0) + "/" + _0x4906ec.getTotalTime().toFixed(0);
        $("title").text(_0x54e7d);
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x18ffea = _0x4906ec.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
        if (_0x18ffea != null) {
          _0x18ffea.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
        }
        let _0x1413c0 = await _0x4906ec.isPlayFinish();
        if (_0x1413c0) {
          _0x4906ec.pageData.waitTime = 15;
          layer.msg("视频即将结束，等待下一步操作", {
            time: 10000
          });
          setTimeout(() => {
            _0x4906ec.confirmRun("准备前往列表页面").then(_0x10b5da => {
              location.href = _0x4906ec.getGMData("listUrl", "/");
            });
          }, 10000);
          clearInterval(_0x4906ec.pageData.video.index);
          _0x4906ec.pageData.video.index = null;
          return;
        }
        let _0x13613c = await _0x4906ec.videoIsPlay();
        if (!_0x13613c) {
          if (!_0x1413c0) {
            _0x4906ec.play();
          }
        }
      } catch (_0xef80c9) {
        console.error("视频页面定时器出错", _0xef80c9);
      }
    }, _0x4c46c4 * 1000);
  },
  async page_channelDetail() {
    console.log("%c page_channelDetail", "background:rgb(0,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    if (!_0x4906ec.getUserName()) {
      location.href = "https://www.cela.gov.cn/home/";
      return;
    }
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    await _0x4906ec.waitOf(_0x5bc88d => _0x4906ec.getElByText($("[role=\"tab\"]"), "章节") != null);
    await _0x4906ec.waitTimeout(1000);
    _0x4906ec.getElByText($("[role=\"tab\"]"), "章节").click();
    await _0x4906ec.waitOf(_0x153b4b => $(".body-content .el-progress__text").length > 0);
    let _0x1d3823 = null;
    $(".body-content .el-progress__text").each((_0x5a2720, _0x392d65) => {
      let _0x3a8c49 = Number($(_0x392d65).text().trim().replace("%", ""));
      if (_0x3a8c49 < 100) {
        _0x1d3823 = $(_0x392d65);
        return false;
      }
    });
    if (_0x1d3823 == null) {
      _0x4906ec.alertMsg("学习完成");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    _0x4906ec.confirmRun("3秒后执行下一步", 3000).then(_0x224447 => {
      _0x1d3823.parents(".body-content:first").find("dd.handle").click();
      _0x4906ec.openLjTips();
    });
  },
  async page_listClassDetail() {
    console.log("%c page_listClassDetail", "background:rgb(0,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    if (!_0x4906ec.getUserName()) {
      location.href = "https://www.cela.gov.cn/home/";
      return;
    }
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    await _0x4906ec.waitOf(_0x39428a => $(".progress i").length > 0);
    let _0x19e453 = null;
    $(".progress i").each((_0x41742e, _0x9c419f) => {
      let _0x2ffe42 = Number($(_0x9c419f).text().trim().replace("%", ""));
      if (_0x2ffe42 < 100) {
        _0x19e453 = $(_0x9c419f);
        return false;
      }
    });
    if (_0x19e453 == null) {
      _0x4906ec.alertMsg("学习完成");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    _0x4906ec.confirmRun("3秒后执行下一步", 3000).then(_0x1ec11a => {
      _0x19e453.parents(".cont:first").find("a.normal")[0].click();
      _0x4906ec.openLjTips();
    });
  },
  async page_list2() {
    console.log("%c page_list", "background:rgb(0,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    await _0x4906ec.waitOf(_0x572595 => $(".hoz_course_row").length > 0);
    let _0x17041f = null;
    $(".hoz_course_row").each((_0x2c9d33, _0x6535b2) => {
      let _0x749586 = Number($(_0x6535b2).find(".gp-classW3").text().trim().replace("%", ""));
      if (_0x749586 < 100) {
        _0x17041f = $(_0x6535b2);
        return false;
      }
    });
    if (_0x17041f == null) {
      layer.alert("学习完成，如果结果有误，请使用`脚本菜单`中的清理缓存功能后再试");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    _0x4906ec.confirmRun("3秒后执行下一步", 3000).then(_0x51ae87 => {
      _0x17041f.find("h2 a")[0].click();
      _0x4906ec.openLjTips();
    });
  },
  async page_list_specialdetail() {
    console.log("%c page_list_specialdetail", "background:rgb(0,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    await _0x4906ec.waitOf(_0x4b4321 => $(".catalogue_item").length > 0);
    let _0x4b7545 = null;
    let _0x2fd641 = _0x4906ec.getGMData("finishVideoList", []);
    $(".catalogue_item").each((_0x401719, _0x1e8e4d) => {
      let _0x11d9b9 = $(_0x1e8e4d).find(".item-title").text().trim();
      if (!_0x2fd641.includes(_0x11d9b9)) {
        _0x4b7545 = $(_0x1e8e4d);
        return false;
      }
    });
    if (_0x4b7545 == null) {
      layer.alert("学习完成，如果结果有误，请使用`脚本菜单`中的清理缓存功能后再试");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    _0x4906ec.confirmRun("3秒后执行下一步", 3000).then(_0x155de8 => {
      _0x4b7545.find(".item-title").click();
      _0x4906ec.openLjTips();
    });
  },
  async page_list3() {
    console.log("%c page_list3", "background:rgb(0,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    await _0x4906ec.waitOf(_0x342d96 => $(".normalitemContent").length > 0);
    let _0x191541 = null;
    let _0x352748 = _0x4906ec.getGMData("finishVideoList", []);
    $(".normalitemContent").each((_0x3725e1, _0xd41bf9) => {
      let _0x101d07 = $(_0xd41bf9).find(".-item-title").attr("title");
      if (!_0x352748.includes(_0x101d07)) {
        _0x191541 = $(_0xd41bf9);
        return false;
      }
    });
    if (_0x191541 == null) {
      layer.alert("学习完成，如果结果有误，请使用`脚本菜单`中的清理缓存功能后再试");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    _0x4906ec.confirmRun("3秒后执行下一步", 3000).then(_0x1eaa72 => {
      _0x191541.find(".-item-title").click();
      _0x4906ec.openLjTips();
    });
  },
  async page_list4() {
    console.log("%c page_list4", "background:rgb(0,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    await _0x4906ec.waitOf(_0x4db27b => $(".dsf_nc_special_detail_course_item [role=\"progressbar\"]").length > 0);
    _0x4906ec.tipsMsg("等待脚本操作");
    let _0x44dfa8 = null;
    await _0x4906ec.waitTimeout(1000);
    $(".dsf_nc_special_detail_course_item [role=\"progressbar\"]").each((_0x23324c, _0x4703a4) => {
      let _0x31cc14 = $(_0x4703a4).parents(".detail_desc_item:first").find(".enter_btn").attr("style");
      if (_0x31cc14 && _0x31cc14.includes("background: rgb(170, 170, 170)")) {
        return true;
      }
      let _0x490e84 = Number($(_0x4703a4).attr("aria-valuenow"));
      if (_0x490e84 <= 99) {
        _0x44dfa8 = $(_0x4703a4);
        return false;
      }
    });
    if (_0x44dfa8 == null) {
      layer.alert("学习完成，如果结果有误，请使用`脚本菜单`中的清理缓存功能后再试");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    _0x4906ec.confirmRun("3秒后执行下一步", 3000).then(_0x3b778d => {
      _0x44dfa8.parents(".detail_desc_item:first").find(".enter_btn").click();
      _0x4906ec.openLjTips();
    });
  },
  async page_special_recommend_hot() {
    console.log("%c page_special_recommend_hot", "background:rgb(255,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    await _0x4906ec.waitOf(_0x2cd2fe => $("a.cc_item").length > 0);
    await _0x4906ec.waitTimeout(1000);
    let _0x36c13b = _0x4906ec.getGMData("finishVideoList", []);
    let _0x537928 = null;
    $("a.cc_item").each((_0x7cd460, _0x1cb9b8) => {
      let _0x2f8e93 = $(_0x1cb9b8).find(".cc_title").attr("title");
      if ($(_0x1cb9b8).find(".h_pro_percent").length > 0) {
        let _0x412639 = Number($(_0x1cb9b8).find(".h_pro_percent").text().replace("%", ""));
        if (_0x412639 >= 100) {
          return true;
        }
      }
      if (!_0x36c13b.includes(_0x2f8e93)) {
        _0x537928 = $(_0x1cb9b8);
        return false;
      }
    });
    if (_0x537928 == null) {
      layer.alert("学习完成，如果结果有误，请使用`脚本菜单`中的清理缓存功能后再试");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    _0x4906ec.confirmRun("3秒后执行下一步", 3000).then(_0x3bca4b => {
      _0x537928[0].click();
      _0x4906ec.openLjTips();
    });
  },
  async setUserName_homeDefault() {
    return new Promise(async (_0x2f8a39, _0x3ea70a) => {
      await this.waitOf(_0x27f920 => _0x4906ec.getElByText($("label"), "您好，", "startsWith") != null);
      this.setGMData("username", _0x4906ec.getElByText($("label"), "您好，", "startsWith").text().trim().replace("您好，", ""));
      if (_0x706d8e) {
        console.log("userName=>" + _0x4906ec.getGMData("username"));
      }
      return _0x2f8a39(true);
    });
  },
  async setUserName_zggdgb() {
    return new Promise(async (_0x30ccc1, _0x292457) => {
      let _0x1c0064 = "";
      await _0x4906ec.waitOf(_0x5dc39c => {
        try {
          _0x1c0064 = $(".username").text().replace("欢迎您,", "").trim();
          if (_0x1c0064 && _0x1c0064 != "") {
            _0x706d8e && _0x4906ec.tipsMsg("username=" + _0x1c0064);
            _0x4906ec.setGMData("username", _0x1c0064);
            return true;
          }
          return false;
        } catch (_0x2a3875) {
          return false;
        }
      });
      return _0x30ccc1(_0x1c0064);
    });
  },
  async setUserName_http() {
    return new Promise(async (_0x5764c6, _0x3063f8) => {
      await _0x4906ec.waitOf(_0x1813b1 => unsafeWindow.$ && unsafeWindow.$().jquery);
      unsafeWindow.$.get("/dsf5/nc/org/user/detail", _0x3ff6d8 => {
        let _0x238b19 = JSON.parse(_0x3ff6d8).data.name;
        _0x4906ec.setGMData("username", _0x238b19);
        return _0x5764c6();
      });
    });
  },
  async setUserName_page_personal() {
    return new Promise(async (_0x3eecdd, _0x34b672) => {
      await this.waitOf(_0x44fe65 => $(".studyCon div>em").text().trim() != "");
      this.setGMData("username", $(".studyCon div>em").text().trim());
      return _0x3eecdd(true);
    });
  },
  async page_playcourse() {
    console.log("%c page_playcourse", "background:rgb(255,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    await _0x4906ec.gmAuthDownScore("8c43521db9f5412693e48606a6291455");
    let _0x47a70a = 2;
    _0x4906ec.pageData.page_playcourseIndex = setInterval(async () => {
      try {
        if (_0x4906ec.pageData.waitTime > 0) {
          _0x4906ec.pageData.waitTime -= _0x47a70a;
          return;
        }
        if (!location.href.includes("/portal/playcourse.do?")) {
          return;
        }
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x100da0 = await _0x4906ec.isPlayFinish();
        if (_0x100da0) {
          layer.msg("视频即将结束，等待下一步操作", {
            time: 10000
          });
          _0x4906ec.pageData.waitTime = 15;
          _0x4906ec.page_playcourseNextVideo();
          return;
        }
        let _0x5d3c18 = await _0x4906ec.videoIsPlay();
        if (!_0x5d3c18) {
          if (!_0x100da0) {
            _0x4906ec.play();
          }
        }
      } catch (_0x97ac50) {
        console.error("视频页面定时器出错", _0x97ac50);
      }
    }, _0x47a70a * 1000);
  },
  async page_playcourseNextVideo() {
    if ($(".menu_item").index($(".menu_item.currentChapter")) == $(".menu_item").length - 1) {
      setTimeout(() => {
        let _0x2bda9c = $(".course_name").text().trim();
        let _0x129057 = _0x4906ec.getGMData("finishVideoList", []);
        _0x129057.push(_0x2bda9c);
        _0x4906ec.setGMData("finishVideoList", _0x129057);
        _0x4906ec.confirmRun("准备前往列表页面").then(_0x55f59a => {
          top.location.href = _0x4906ec.getGMData("listUrl", "/");
        });
      }, 7000);
    } else {
      const _0x4f1f14 = {
        time: 5000
      };
      layer.msg("等待自动切换下一集", _0x4f1f14);
    }
  },
  async page_course_detail() {
    await this.waitOf(_0x10fa06 => $(".hover_btn").length > 0);
    _0x4906ec.closeWaitConfrimWin();
    if ($(".hover_btn").text() == "我要选课") {
      _0x4906ec.confirmRun("检测到未选课，3秒后自动选课").then(_0x1f3cfe => {
        $(".hover_btn")[0].click();
        setTimeout(() => {
          location.reload();
        }, 3000);
      });
    } else {
      _0x4906ec.confirmRun().then(_0x764b5e => {
        $(".hover_btn")[0].click();
        _0x4906ec.openLjTips();
      });
    }
  },
  async page_class_detail_course() {
    console.log("%c video page_class_detail_course", "background:rgb(255,0,0);color:#fff");
    await this.waitOf(_0x25700a => $(".h_pro_percent").length > 0);
    _0x4906ec.closeWaitConfrimWin();
    await this.waitTimeout(500);
    let _0x4da984 = null;
    $(".h_pro_percent").each((_0x46356d, _0x525fc9) => {
      if ($(_0x525fc9).text().trim() != "100.0%") {
        _0x4da984 = $(_0x525fc9);
        return false;
      }
    });
    if (_0x4da984 == null) {
      layer.alert("学习完成");
      return;
    }
    _0x4906ec.setGMData("listUrl", location.href);
    this.confirmRun().then(_0x349f8d => {
      _0x4da984.parents(".hoz_course_row:first").find(".hoz_course_name>a")[0].click();
    });
  },
  async setUserName2() {
    return new Promise(async (_0x3d004e, _0xba835e) => {
      await this.waitOf(_0x7025f5 => $(".center_user>span>span").text().trim() != "");
      let _0xf43191 = $(".center_user>span>span").text().trim();
      _0x706d8e && _0x4906ec.tipsMsg(_0xf43191);
      this.setGMData("username", _0xf43191);
      return _0x3d004e(true);
    });
  },
  async setUserName3() {
    return new Promise(async (_0x521a94, _0x5a9820) => {
      let _0x5939cb = "";
      let _0x63731d = layer.load();
      await _0x4906ec.waitOf(_0x2c4453 => {
        _0x5939cb = $(".center_user").text().trim().replace(/[欢迎学员]/g, "").trim();
        if (_0x5939cb != "") {
          _0x4906ec.setGMData("username", _0x5939cb);
          layer.close(_0x63731d);
          return true;
        }
        return false;
      });
      return _0x521a94(_0x5939cb);
    });
  },
  setUserName() {
    if (_0x4906ec.pageData.userNameIndex != null) {
      return;
    }
    _0x4906ec.setUserNameFun();
    _0x4906ec.pageData.userNameIndex = setInterval(() => {
      _0x4906ec.setUserNameFun();
    }, 500);
  },
  setUserName4() {
    return new Promise(async (_0x5624d8, _0x390863) => {
      _0x706d8e && console.log("setUserName4");
      let _0x454dd6 = "";
      await _0x4906ec.waitOf(_0x3e2061 => _0x4906ec.getElByText($("a"), "退出登录") != null);
      await _0x4906ec.waitOf(_0x4c91ed => {
        try {
          _0x454dd6 = _0x4906ec.getElByText($("a"), "退出登录").prev().text().replace("您好，", "");
          if (_0x454dd6 && _0x454dd6 != "") {
            _0x4906ec.setGMData("username", _0x454dd6);
            return true;
          }
          return false;
        } catch (_0x2c7d95) {
          return false;
        }
      });
      return _0x5624d8(_0x454dd6);
    });
  },
  setUserNameFun() {
    console.log("fun");
    let _0xc1bff9 = $(".user-has-login .user-wel-text").text().trim();
    if (_0xc1bff9 != "") {
      if (_0xc1bff9.indexOf("欢迎您") != -1) {
        _0xc1bff9 = _0xc1bff9.replace("欢迎您，", "").replace(" 修改密码", "").replace("退出登录", "").trim();
      }
      _0x4906ec.setGMData("username", _0xc1bff9);
      clearInterval(_0x4906ec.pageData.userNameIndex);
      let _0x3659ac = _0x4906ec.getUrlParam("zform");
      if (_0x3659ac) {
        top.location.href = decodeURIComponent(_0x3659ac);
      }
    }
  },
  openConfig() {
    let _0x594193 = "\n      <div class=\"p-10 zfk-container\">\n      <form class=\"zfk-form\">\n        <div class=\"zfk-form-item block\">\n          <label>学习的专题</label>\n          <div>\n            <label><input type=\"radio\" name=\"radioVal\" value=\"1\" />选项1</label>\n          </div>\n          <div>\n            <label><input type=\"radio\" name=\"radioVal\" value=\"1\" />选项1</label>\n          </div>\n          <div>\n            <label><input type=\"radio\" name=\"radioVal\" value=\"1\" />选项1</label>\n          </div>\n        </div>\n        <div class=\"zfk-form-item block\">\n          <label>学习模式</label>\n          <label\n            ><input type=\"radio\" name=\"mode\" value=\"1\" />学习选中专题</label\n          >\n          <label\n            ><input\n              type=\"radio\"\n              name=\"mode\"\n              value=\"2\"\n            />内置适配模式（只适配了部分专题）</label\n          >\n        </div>\n        <div class=\"zfk-form-item block\">\n          <label></label>\n          <button class=\"zfk-btn\" onclick=\"zfk.saveConfig()\" type=\"button\">\n            保存\n          </button>\n          <button\n            class=\"zfk-btn danger\"\n            onclick=\"zfk.closeConfig()\"\n            type=\"button\"\n          >\n            关闭\n          </button>\n        </div>\n      </form>\n    </div>\n    ";
    const _0x324d47 = {
      type: "1",
      title: "设置",
      content: _0x594193,
      btn: false,
      area: ["600px", "600px"]
    };
    layer.open(_0x324d47);
    let _0xdfed44 = _0x4906ec.getConfig();
    _0x4906ec.setFormVal(".zfk-form", _0xdfed44);
  },
  getElByText(_0x5e25c7, _0x559304, _0x4d48ed = "eq", _0x505491 = true) {
    let _0xf5c5b2 = null;
    $(_0x5e25c7).each((_0x4bccef, _0x1cd491) => {
      if (_0x505491 && !$(_0x1cd491).is(":visible")) {
        return true;
      }
      if (_0x4d48ed == "eq" && $(_0x1cd491).text().trim() == _0x559304) {
        _0xf5c5b2 = $(_0x1cd491);
        return false;
      } else {
        if (_0x4d48ed == "startsWith" && $(_0x1cd491).text().trim().startsWith(_0x559304)) {
          _0xf5c5b2 = $(_0x1cd491);
          return false;
        } else {
          if (_0x4d48ed == "endsWith" && $(_0x1cd491).text().trim().endsWith(_0x559304)) {
            _0xf5c5b2 = $(_0x1cd491);
            return false;
          }
        }
      }
    });
    return _0xf5c5b2;
  },
  getElListByText(_0x394f2b, _0x581f9c, _0x3b6ed2 = "eq", _0x4899b5 = true) {
    let _0x2191f2 = [];
    $(_0x394f2b).each((_0x7c9daf, _0x49e7b1) => {
      if (_0x4899b5 && !$(_0x394f2b).is(":visible")) {
        return true;
      }
      if (_0x3b6ed2 == "eq" && $(_0x49e7b1).text().trim() == _0x581f9c) {
        _0x2191f2.push($(_0x49e7b1));
      } else {
        if (_0x3b6ed2 == "startsWith" && $(_0x49e7b1).text().trim().startsWith(_0x581f9c)) {
          _0x2191f2.push($(_0x49e7b1));
        } else {
          if (_0x3b6ed2 == "endsWith" && $(_0x49e7b1).text().trim().endsWith(_0x581f9c)) {
            _0x2191f2.push($(_0x49e7b1));
          }
        }
      }
    });
    return _0x2191f2;
  },
  setFormVal(_0x4e6b6b, _0x52ff43) {
    $.each(_0x52ff43, function (_0x1ed069, _0x4cb0b4) {
      let _0x308e74 = $(_0x4e6b6b).find("[name=\"" + _0x1ed069 + "\"]");
      if (_0x308e74.length == 0) {
        return true;
      } else {
        if (_0x308e74.length == 1) {
          let _0x5aafa9 = _0x308e74.eq(0).attr("type");
          switch (_0x5aafa9) {
            case "radio":
            case "checkbox":
              if (_0x308e74.val() == _0x4cb0b4) {
                _0x308e74.prop("checked", true);
              }
              break;
            default:
              _0x308e74.val(_0x4cb0b4);
              break;
          }
        } else {
          _0x308e74.each((_0x35f8fd, _0x44dac2) => {
            if (_0x4cb0b4.includes($(_0x44dac2).val())) {
              $(_0x44dac2).prop("checked", true);
            }
          });
        }
      }
    });
  },
  getFormVal(_0x3f202a) {
    let _0x5e4194 = {};
    var _0x46c894 = $(_0x3f202a).serializeArray();
    let _0x3270f6 = [];
    $.each(_0x46c894, function () {
      console.log(this);
      if (!_0x3270f6.includes(this.name)) {
        _0x3270f6.push(this.name);
        _0x5e4194[this.name] = this.value;
      } else {
        let _0xc2b8d = _0x5e4194[this.name];
        if (Array.isArray(_0xc2b8d)) {
          _0x5e4194[this.name].push(this.value);
        } else {
          _0x5e4194[this.name] = [_0x5e4194[this.name], this.value];
        }
      }
    });
    return _0x5e4194;
  },
  getConfig() {
    let _0x5b23ed = GM_getValue("config", {});
    const _0xa14009 = {
      bs: 1,
      mode: "2"
    };
    _0x5b23ed = Object.assign(_0xa14009, _0x5b23ed);
    return _0x5b23ed;
  },
  setConfig(_0x267383, _0x5adb88 = "") {
    console.log("setConfig" + _0x5adb88, JSON.stringify(_0x267383));
    GM_setValue("config", _0x267383);
  },
  saveConfig() {
    var _0x19b4e1 = _0x4906ec.getFormVal(".zfk-form");
    console.log(_0x19b4e1);
    _0x4906ec.setConfig(_0x19b4e1);
    layer.msg("保存成功");
  },
  closeConfig() {
    layer.closeAll();
  },
  showVersionAlert(_0x80a1e3 = true) {
    let _0x1b1134 = _0x4906ec.getGMData("showVersionAlert", "");
    if (!_0x80a1e3 && _0x1b1134 == _0x4906ec.getGMData("version")) {
      return;
    }
    layer.open({
      type: "1",
      title: "版本号：" + _0x4906ec.setting.version.version,
      content: _0x4906ec.setting.version.body,
      btn: "我知道了",
      area: ["600px", "auto"],
      yes: function (_0x345a12) {
        _0x4906ec.setGMData("showVersionAlert", _0x4906ec.getGMData("version"));
        layer.close(_0x345a12);
      }
    });
  },
  async callRegisterMenuCommand(_0x13f2de, _0xc5dfa1) {
    if (!_0x4906ec.pageData.menuBtnIndex) {
      _0x4906ec.pageData.menuBtnIndex = 0;
    }
    GM_registerMenuCommand(_0x13f2de, _0xc5dfa1);
    await _0x4906ec.waitOf(_0x3d4804 => $("body:visible").length > 0);
    await _0x4906ec.waitTimeout(500);
    if ($("#zfkLeftMenuContainer").length > 0) {
      _0x4906ec.pageData.menuBtnIndex++;
      $("#zfkLeftMenuContainer .zfkLeftMenuBtnUl").append("<li id=\"zfkMenuBtn_" + _0x4906ec.pageData.menuBtnIndex + "\">" + _0x13f2de + "</li>");
      $("#zfkMenuBtn_" + _0x4906ec.pageData.menuBtnIndex).click(function () {
        _0xc5dfa1();
      });
    }
  },
  registerMenuCommandTemplate() {
    _0x4906ec.callRegisterMenuCommand("清理缓存", _0x4906ec.clearResult);
    _0x4906ec.callRegisterMenuCommand("使用说明", _0x4906ec.openDoc);
    _0x4906ec.callRegisterMenuCommand("我的信息", _0x4906ec.myInfo);
    _0x4906ec.callRegisterMenuCommand("联系作者", _0x4906ec.linkAuthor);
    _0x4906ec.callRegisterMenuCommand("版本：" + _0x4906ec.setting.version.version, _0x4906ec.showVersionAlert);
  },
  linkAuthor() {
    window.open("http://doc.zhanyc.cn/contact-me/");
  },
  setClip(_0x275c38) {
    GM_setClipboard(_0x275c38, "text");
    layer.msg("复制成功");
  },
  clearResult() {
    if (confirm("确认要清空结果数据吗？")) {
      _0x4906ec.delGMData("lastCourse");
      _0x4906ec.setGMData("username", "");
      _0x4906ec.setGMData("result", []);
      _0x4906ec.delGMData("code", []);
      _0x4906ec.delGMData("finishVideoList", []);
      top.location.href = "https://www.cela.gov.cn/home/personal/index";
      layer.msg("清理学习记录完成");
    }
  },
  page_yhwelcome() {
    console.log("%c page_yhwelcome", "background:rgb(255,0,0);color:#fff");
    var _0x4803c0 = sessionStorage.getItem("token");
    _0x4906ec.setGMData("token", _0x4803c0);
    _0x4906ec.setGMData("login", {
      login: true,
      time: _0x4906ec.now()
    });
  },
  async page_list() {
    console.log("%c page_list", "background:rgb(0,0,0);color:#fff");
    await _0x4906ec.waitOf(_0x537975 => $(".course-wrap .item[data-cid]").length > 0);
    let _0x1c4255 = _0x4906ec.getGMData("lastCourse", $(".course-wrap .item[data-cid]").eq(0).data("cid"));
    $(".course-inner").before("<div style=\"padding: 10px;background: #517ddb;color: #fff;text-align: center;font-size: 20px;\">请勿关闭该页面，脚本会在该页面为您点击下一门课程</div>");
    let _0x22e925 = $("[data-cid=\"" + _0x1c4255 + "\"]").find(".icon-person").next().length > 0;
    if (_0x22e925) {
      $("[data-cid=\"" + _0x1c4255 + "\"]").click();
    } else {
      alert("当前页面可以查看的课程已经全部播放完毕");
    }
    GM_addValueChangeListener("courseFinish", function (_0x144ac6, _0xd9a92c, _0x3dc964, _0x5b73ea) {
      console.log("GM_addValueChangeListener  courseFinish", _0x3dc964);
      _0x1c4255 = _0x4906ec.getGMData("lastCourse", $(".course-wrap .item[data-cid]").eq(0).data("cid"));
      if ($("[data-cid=\"" + _0x1c4255 + "\"]").next().length > 0) {
        _0x1c4255 = $("[data-cid=\"" + _0x1c4255 + "\"]").next().data("cid");
        _0x4906ec.setGMData("lastCourse", _0x1c4255);
        let _0x257357 = $("[data-cid=\"" + _0x1c4255 + "\"]").find(".icon-person").next().length > 0;
        if (_0x257357) {
          $("[data-cid=\"" + _0x1c4255 + "\"]").click();
        } else {
          alert("当前页面可以查看的课程已经全部播放完毕");
        }
      } else {
        alert("当前页面所有课程已经全部播放完毕");
      }
    });
  },
  async nextVideo2() {
    let _0x2c0233 = null;
    $(".tab-content-desc").each((_0x283918, _0xb99040) => {
      let _0x36b560 = Number($(_0xb99040).find("[role=\"progressbar\"]").attr("aria-valuenow"));
      if (_0x36b560 < 100) {
        layer.msg("切换到第一个未完成视频任务");
        $(_0xb99040).click();
        _0x2c0233 = $(_0xb99040);
        _0x4906ec.pageData.waitTime = 5;
        return false;
      }
    });
    if (_0x2c0233 == null) {
      _0x4906ec.confirmRun("学习完毕，前往列表页面").then(_0x5ed959 => {
        clearInterval(_0x4906ec.pageData.index.video);
        _0x4906ec.pageData.index.video = null;
        window.open(_0x4906ec.getGMData("listUrl", "/"));
        _0x4906ec.openLjTips();
      });
    }
  },
  getUserName() {
    return _0x4906ec.getGMData("username", "");
  },
  async page_video() {
    console.log("%c page_video", "background:rgb(0,0,0);color:#fff");
    _0x4906ec.closeWaitConfrimWin();
    let _0x1e7a95 = 2;
    if (_0x4906ec.pageData.index.video != null) {
      return;
    }
    _0x4906ec.pageData.index.video = setInterval(async () => {
      console.log("%c page_video run", "background:rgb(0,0,0);color:#fff");
      if (_0x4906ec.pageData.waitTime > 0) {
        _0x4906ec.pageData.waitTime -= _0x1e7a95;
        return;
      }
      _0x4906ec.setVideoVolume();
      let _0x432835 = $(".el-menu-item.is-active").find(".el-progress__text").text().trim();
      if (_0x432835) {
        let _0x124bdb = Number($(".el-menu-item.is-active").find(".el-progress__text").text().trim().replace("%", ""));
        if (_0x124bdb >= 100) {
          layer.msg("视频已经播放完成，等待下一步操作");
          _0x4906ec.pageData.waitTime = 15;
          setTimeout(() => {
            _0x4906ec.page_nextCouse();
          }, 3000);
        }
      }
      if ($(".tab-content-desc.desc-item-sel").length > 0) {
        let _0x1474a9 = Number($(".tab-content-desc.desc-item-sel").find("[role=\"progressbar\"]").attr("aria-valuenow"));
        if (_0x1474a9 >= 100) {
          _0x4906ec.pageData.waitTime = 10;
          _0x4906ec.nextVideo2();
          return;
        }
      }
      let _0xf62c8e = await _0x4906ec.isPlayFinish();
      if (_0xf62c8e) {
        layer.msg("视频即将结束，等待下一步操作");
        _0x4906ec.pageData.waitTime = 15;
        setTimeout(() => {
          _0x4906ec.page_nextCouse();
        }, 10000);
        return;
      }
      if ($("span.pv-icon-btn-play:visible").length > 0) {
        $("span.pv-icon-btn-play:visible").click();
        return;
      }
      if ($("button.pv-icon-btn-play:visible").length > 0) {
        $("button.pv-icon-btn-play:visible").click();
        return;
      }
      let _0x110d4e = await _0x4906ec.videoIsPlay();
      if (!_0x110d4e) {
        if (!_0xf62c8e) {
          _0x4906ec.play();
        }
      }
      if (_0x4906ec.isPlayFinish()) {
        _0x4906ec.getVideo().currentTime = 10;
        _0x4906ec.getVideo().play();
        return;
      }
    }, _0x1e7a95 * 1000);
  },
  async getUserData(_0x47b680 = null) {
    return new Promise(async (_0x5a9177, _0x2d9e30) => {
      let _0x5842f5 = _0x4906ec.getUserName();
      if (_0x4906ec.project.isSelf) {
        let _0x50672a = await _0x4906ec.getUserDataOnline(_0x47b680);
        const _0x1bc7cf = {
          id: _0x50672a.id,
          acc: _0x50672a.acc,
          pwd: _0x50672a.pwd,
          name: _0x50672a.name,
          video: [],
          ks: []
        };
        if (_0x50672a.list) {
          let _0x2c6ccf = JSON.parse(_0x50672a.list);
          _0x1bc7cf.video = _0x2c6ccf.video;
          _0x1bc7cf.ks = _0x2c6ccf.ks;
          _0x1bc7cf.courseList = _0x2c6ccf.courseList;
        }
        return _0x5a9177(_0x1bc7cf);
      }
      const _0x1a9dc1 = {
        acc: _0x5842f5,
        name: _0x5842f5,
        video: [],
        sinishSubArr: [],
        finishCourseArr: [],
        finishCoursewareidArr: []
      };
      let _0x5e78e6 = _0x4906ec.getGMData("result", []);
      let _0xba37f1 = _0x5e78e6.find(_0x4854d6 => _0x4854d6.acc == _0x5842f5);
      if (!_0xba37f1) {
        _0xba37f1 = _0x1a9dc1;
        _0x5e78e6.push(_0xba37f1);
        _0x4906ec.setGMData("result", _0x5e78e6);
      } else {
        _0xba37f1 = Object.assign(_0x1a9dc1, _0xba37f1);
      }
      return _0x5a9177(_0xba37f1);
    });
  },
  async getUserDataOnline(_0x5ac836 = null) {
    return new Promise(async (_0x102a6f, _0x42e588) => {
      return _0x102a6f(await _0x4906ec.queryCurAcc(_0x5ac836));
    });
  },
  async setUserData(_0x38e8d0) {
    return new Promise(async (_0xc8ae62, _0x3372ed) => {
      if (_0x4906ec.project.isSelf) {
        await _0x4906ec.setUserDataOnline(_0x38e8d0);
        return _0xc8ae62();
      }
      let _0x1f6bb5 = _0x4906ec.getGMData("result", []);
      let _0x6a12b7 = _0x4906ec.getUserName();
      let _0x2670e9 = _0x1f6bb5.findIndex(_0x261a8c => _0x261a8c.acc == _0x6a12b7);
      if (_0x2670e9 == -1) {
        userData = _0x38e8d0;
        _0x1f6bb5.push(userData);
      } else {
        _0x1f6bb5.splice(_0x2670e9, 1, _0x38e8d0);
      }
      _0x4906ec.setGMData("result", _0x1f6bb5);
      return _0xc8ae62();
    });
  },
  async page_nextCouse() {
    _0x4906ec.setGMData("courseFinish", _0x4906ec.now());
    console.log("page_nextCouse");
    unsafeWindow.top.window.onbeforeunload = () => {};
    let _0x3af9a5 = $(".head-title").attr("title");
    let _0x588183 = _0x4906ec.getGMData("finishVideoList", []);
    _0x588183.push(_0x3af9a5);
    _0x4906ec.setGMData("finishVideoList", _0x588183);
    _0x4906ec.confirmRun("学习完毕，前往列表页面").then(_0x437e1f => {
      clearInterval(_0x4906ec.pageData.index.video);
      _0x4906ec.pageData.index.video = null;
      window.open(_0x4906ec.getGMData("listUrl", "/"));
      _0x4906ec.openLjTips();
    });
  },
  async checkVersion() {
    return new Promise(_0x162dce => {
      if (_0x706d8e) {
        _0x4906ec.delGMData("code");
      }
      if (!top === window || _0x706d8e) {
        return _0x162dce(true);
      }
      let _0x3c4120 = _0x4906ec.getGMData("lastCheckVersionTime", 0);
      if (_0x4906ec.now() - _0x3c4120 < 60000) {
        console.log("%c 跳过更新检测", "background:rgb(0,0,0);color:#fff");
        return _0x162dce(true);
      }
      _0x4906ec.gmPost("/yh/base/checkVersion", {
        id: baseConfig.project.id,
        v1: baseConfig.project.version,
        v2: _0x4906ec.getGMData("version", "")
      }).then(_0x1cc6c9 => {
        if (_0x1cc6c9.message == "更新脚本") {
          layer.alert(_0x1cc6c9.result.msg, function () {
            top.open(_0x1cc6c9.result.url);
          });
        } else {
          if (_0x1cc6c9.message == "更新内容") {
            _0x4906ec.delGMData("code");
            location.href = location.href;
          }
        }
        return _0x162dce(true);
      }, _0x2b99b0 => {
        if (_0x706d8e) {
          console.log(_0x2b99b0);
        }
      });
    });
  },
  play() {
    _0x4906ec.getVideo().volume = 0;
    setTimeout(() => {
      _0x4906ec.getVideo().play();
    }, 200);
  },
  page_nextVideo() {
    $(".nextdontcheatorshit").click();
    console.log("点击下一个视频");
  },
  getVideo() {
    return $("video")[0];
  },
  setVideoVolume() {
    if (_0x4906ec.getVideo().volume != 0) {
      $("video")[0].volume = 0;
    }
  },
  isPlayFinish() {
    try {
      return _0x4906ec.getTotalTime() > 0 && _0x4906ec.getCurTime() + 5 >= _0x4906ec.getTotalTime();
    } catch (_0x5e9301) {
      return false;
    }
  },
  getCurTime() {
    let _0x12a6bc = 0;
    try {
      _0x12a6bc = _0x4906ec.getVideo().currentTime;
    } catch (_0x90a335) {
      console.error(_0x90a335);
    }
    return _0x12a6bc;
  },
  getTotalTime() {
    let _0x5751f8 = 0;
    try {
      _0x5751f8 = _0x4906ec.getVideo().duration;
    } catch (_0x3d1b4a) {
      console.error(_0x3d1b4a);
    }
    return _0x5751f8;
  },
  async videoIsPlay() {
    return new Promise(_0x28f3a3 => {
      try {
        let _0x37b8ac = $("video")[0].currentTime;
        setTimeout(() => {
          let _0x66b37d = $("video")[0].currentTime;
          let _0x2e577f = _0x66b37d > _0x37b8ac;
          if (_0x2e577f) {
            setTimeout(() => {
              let _0x44f6bc = $("video")[0].currentTime;
              let _0x14e397 = _0x44f6bc > _0x66b37d;
              _0x28f3a3(_0x14e397);
            }, 100);
          } else {
            return _0x28f3a3(false);
          }
        }, 100);
      } catch (_0x3db674) {
        _0x28f3a3(false);
      }
    });
  },
  matchUrl(_0x3db625, _0x50b9af = "like", _0x161e8d = location.href) {
    let _0x41ff7d = false;
    switch (_0x50b9af) {
      case "eq":
        _0x41ff7d = _0x3db625 == _0x161e8d;
        break;
      case "like":
        _0x41ff7d = _0x161e8d.indexOf(_0x3db625) != -1;
        break;
      case "left":
        _0x41ff7d = _0x161e8d.startsWith(_0x3db625);
        break;
      case "right":
        _0x41ff7d = _0x161e8d.endsWith(_0x3db625);
        break;
    }
    return _0x41ff7d;
  },
  now() {
    return new Date().getTime();
  },
  toUserNamePage() {
    location.href = "https://www.cela.gov.cn/home/default";
    return;
  },
  callAuthSuccess() {
    _0x4906ec.setGMData("authSuccess", _0x4906ec.now());
  },
  initBuyAuth() {
    if (!_0x4906ec.pageData.authListnerIndex) {
      _0x4906ec.pageData.authListnerIndex = GM_addValueChangeListener("authSuccess", function (_0x18471c, _0x2e1e60, _0x31a7cc, _0x2dacba) {
        if (_0x2dacba) {
          layer.close(_0x4906ec.pageData.myInfoIndex);
          layer.close(_0x4906ec.pageData.noAuthIndex);
          const _0xa99bd7 = {
            type: "1",
            offset: "100px",
            title: "脚本授权提示",
            content: "<div style=\"padding:16px;font-size:20px;\">😃授权购买成功，刷新页面后授权生效</div>"
          };
          layer.open(_0xa99bd7);
        }
      });
    }
    if (!_0x4906ec.buyAuthFun) {
      _0x4906ec.buyAuthFun = function () {
        let _0x940132 = "https://m.zhanyc.cn";
        _0x706d8e && (_0x940132 = "http://localhost:3000");
        window.open(_0x940132 + "/yh-auth?i=" + baseConfig.project.id + "&t=" + _0x4906ec.getGMData("token"));
      };
    }
  },
  myInfo() {
    _0x4906ec.initBuyAuth();
    _0x4906ec.gmAuthPost("/yh/user/myInfo").then(_0x2df76e => {
      if (_0x706d8e) {
        console.log(_0x2df76e);
      }
      let _0x276387 = "脚本ID：【" + baseConfig.project.id + "】 脚本账号昵称：【" + _0x2df76e.name + "】 脚本账号：【" + _0x2df76e.acc + "】";
      let _0x4a6f26 = "\n          <div class=\"p-10 zfk-container\" style=\"padding: 10px;\">\n          <div class=\"kv\" style=\"text-align: center;color: #ffffff;background: #38a1ff;font-weight: bold;margin: -10px -10px 10px;\">" + (_0x4906ec.setting.tjjl || "") + "</div>\n          <div class=\"kv\"><label>脚本ID：</label><span>【" + baseConfig.project.id + "】</span></div>\n          <div class=\"kv\"><label>脚本账号昵称：</label><span>【" + _0x2df76e.name + "】</span></div>\n          <div class=\"kv\"><label>脚本账号：</label><span>【" + _0x2df76e.acc + "】</span></div>\n  \n          <div class=\"kv\" style=\"text-align: center;margin: 10px 0 20px;\">\n            <button onclick=\"zfk.buyAuthFun()\" style=\"cursor: pointer;background:#BE2EDD;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">自助购买授权（👍推荐）</button>\n            <button onclick=\"zfk.setClip('" + _0x276387 + "')\" style=\"cursor: pointer;background:#34495E;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">点这里复制以上信息</button>\n          </div>\n          <div class=\"kv\" style=\"text-align: center;\">\n            <button onclick=\"window.open('https://www.todesk.com/download.html')\" style=\"cursor: pointer;background:#009349;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">下载远程控制软件（需要协助才下载）</button>\n            <button onclick=\"zfk.logout()\" style=\"cursor: pointer;background:#FF6B81;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">退出脚本账号</button>\n          </div>\n  \n          </div>\n          ";
      const _0x4211c5 = {
        type: "1",
        title: "脚本信息",
        content: _0x4a6f26,
        area: ["460px", "300px"],
        offset: "100px"
      };
      _0x4906ec.pageData.myInfoIndex = layer.open(_0x4211c5);
    });
  },
  logout() {
    _0x4906ec.delGMData("token");
    _0x4906ec.delGMData("code");
    layer.msg("脚本账号已退出！");
  },
  tipsLogin(_0x5a565e = "【未登录】脚本需要付费后才可使用。点击[确定]按钮将前往[脚本账号]的注册/登录页面") {
    layer.open({
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x5a565e + "</div>",
      title: "使用脚本前请先登录脚本账号！",
      offset: "100px",
      btn: ["去登录", "查看授权说明", "关闭"],
      yes: function (_0x1f81ad) {
        layer.close(_0x1f81ad);
        _0x4906ec.pageData.loginTipsIndex = layer.alert("已经为您打开登录页面，请留意浏览器窗口");
        _0x4906ec.toLogin();
      },
      btn2: function (_0x4fd82f) {
        window.open("https://doc.zhanyc.cn/pages/auth/");
        return false;
      },
      btn2function(_0x2848a4) {
        layer.close(_0x2848a4);
      }
    });
  },
  gmAuthPost(_0x1e7d57, _0x368493 = {}, _0x2e7f4a = _0x4179e7) {
    _0x1e7d57 = _0x4906ec.fullUrl(_0x1e7d57);
    if (_0x706d8e) {
      console.log("gmPost", _0x1e7d57);
    }
    const _0x4c19ea = {
      "Content-Type": "application/json"
    };
    if (_0x4906ec.getGMData("token", "")) {
      _0x4c19ea["X-Access-Token"] = this.getGMData("token", "");
    }
    return new Promise((_0x5d8296, _0x5146d6) => {
      GM_xmlhttpRequest({
        method: "post",
        url: _0x1e7d57,
        data: JSON.stringify(_0x368493),
        headers: _0x4c19ea,
        responseType: "json",
        onload: function (_0x2164a9) {
          if (_0x706d8e) {
            console.log(_0x2164a9);
          }
          let _0xed97f9 = _0x2164a9.response;
          try {
            if (typeof _0xed97f9 == "string") {
              _0xed97f9 = JSON.parse(_0xed97f9);
            }
          } finally {}
          if (_0xed97f9.message.indexOf("Token失效") != -1) {
            _0x4906ec.tipsLogin();
            return;
          }
          if (_0xed97f9.code != 200) {
            if (_0x2e7f4a.showErr) {
              if (_0xed97f9.message.startsWith("脚本需收费授权使用")) {
                _0x4906ec.initBuyAuth();
                _0x4906ec.pageData.noAuthIndex = layer.open({
                  type: "1",
                  content: "<div style=\"padding:14px;\">" + _0xed97f9.message + "</div>",
                  icon: 3,
                  title: "当前学生账号未授权",
                  offset: "100px",
                  btn: ["去购买授权", "查看授权信息", "查看帮助"],
                  yes: function (_0x1c4a0f) {
                    _0x4906ec.buyAuthFun();
                  },
                  btn2: function (_0x4686e6) {
                    _0x4906ec.myInfo();
                  },
                  btn3: function (_0x528005) {
                    top.open("http://doc.zhanyc.cn/pages/auth/");
                    return false;
                  }
                });
              } else {
                const _0x2e565f = {
                  offset: "100px"
                };
                layer.alert(_0xed97f9.message, _0x2e565f, function () {
                  _0x4906ec.myInfo();
                });
              }
            }
            _0x5146d6(_0xed97f9);
          } else {
            _0x5d8296(_0xed97f9.result);
          }
        },
        onerror: function (_0x49820e) {
          if (_0x706d8e) {
            console.log(_0x49820e);
          }
          _0x5146d6(_0x49820e);
        }
      });
    });
  },
  gmAuthDownScore(_0xb803e1, _0x56b19a = true) {
    return new Promise((_0x514024, _0x36f2d9) => {
      if (_0x4906ec.isDZKFMode() || _0x368bdd) {
        return _0x514024(true);
      }
      if (typeof _0x4906ec.pageData.downSuccess !== "undefined" && _0x4906ec.pageData.downSuccess.includes(_0xb803e1) && _0x4906ec.pageData.downSuccessUserName == _0x4906ec.getUserName()) {
        return _0x514024(true);
      } else {
        if (typeof _0x4906ec.pageData.downError !== "undefined" && _0x4906ec.pageData.downError.includes(_0xb803e1)) {
          return _0x36f2d9(false);
        }
      }
      var _0x4da0b3 = _0x4906ec.getUserName();
      if (!_0x4da0b3) {
        _0x4906ec.toUserNamePage();
        return;
      }
      const _0x252391 = {
        id: _0xb803e1,
        key: _0x4da0b3
      };
      const _0x4252f8 = {
        showErr: _0x56b19a
      };
      _0x4906ec.gmAuthPost("/yh/price/down", _0x252391, _0x4252f8).then(_0x315180 => {
        if (_0x4906ec.pageData) {
          if (!_0x4906ec.pageData.downSuccess) {
            _0x4906ec.pageData.downSuccess = [];
          }
          _0x4906ec.pageData.downSuccess.push(_0xb803e1);
          _0x4906ec.pageData.downSuccessUserName = _0x4da0b3;
        }
        _0x514024(true);
      }, _0x5d9043 => {
        if (!_0x4906ec.pageData.downError) {
          _0x4906ec.pageData.downError = [];
        }
        _0x4906ec.pageData.downError.push(_0xb803e1);
        _0x36f2d9(_0x5d9043);
      });
    });
  },
  isDZKFMode() {
    let _0x17861b = typeof loadFun == "function" && loadFun.toString().includes("var data = res.response;");
    if (!_0x17861b) {
      _0x17861b = typeof isDZKF == "boolean" && !!isDZKF;
    }
    return _0x17861b;
  },
  alertMsg(_0x1f99ea, _0x24d4b3 = 0) {
    return layer.open({
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x1f99ea + "</div>",
      title: "脚本提示" + (_0x24d4b3 == 0 ? "" : "（" + (_0x24d4b3 / 1000).toFixed(2) + "秒后自动关闭本提示}）"),
      offset: "100px",
      time: _0x24d4b3,
      btn: "关闭"
    });
  },
  tipsMsg(_0x476ab5, _0x14d3fd = 3000) {
    const _0x607c0a = {
      offset: "100px",
      time: _0x14d3fd
    };
    return layer.msg(_0x476ab5, _0x607c0a);
  },
  confirmMsg(_0x5c6e79 = "请确认", _0x49a477 = {}) {
    let _0x320883 = {
      title: "脚本提示",
      btn: ["确定", "关闭"],
      fun1(_0x5e9c41) {
        layer.close(_0x5e9c41);
      },
      fun2() {},
      fun3() {}
    };
    Object.assign(_0x320883, _0x49a477);
    const _0x5df53c = {
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x5c6e79 + "</div>",
      title: _0x49a477.title,
      offset: "100px",
      btn: _0x320883.btn,
      yes: _0x320883.fun1,
      btn2: _0x320883.fun2,
      btn3: _0x320883.fun3
    };
    return layer.open(_0x5df53c);
  },
  openLjTips(_0x29ed3f = true, _0x349dab = false, _0x4fc206 = 5000) {
    const _0x3887e6 = {
      type: 1,
      title: "请确认",
      offset: "100px",
      content: "\n            <div style=\"padding:10px\">\n            <p>已经为你打开下一门课程，如果没有打开窗口，请检查浏览器地址栏左右两侧是否有拦截提示，请选择【永久允许】或者在浏览器设置中设置本网站【弹出式窗口和重定向】设置为允许</p>\n            <p style=\"color:red;\">如下图所示：</p>\n            <img src=\"https://js.zhanyc.cn/img/ljts.jpg\"/>\n            </div>\n            "
    };
    let _0x3cb375 = layer.open(_0x3887e6);
    if (!_0x4906ec.pageData.ljtsIndexArr) {
      _0x4906ec.pageData.ljtsIndexArr = [];
    }
    _0x4906ec.pageData.ljtsIndexArr.push(_0x3cb375);
    let _0x34e7f5 = _0x349dab ? location.href : "";
    if (_0x4906ec.pageData.closeTipsIndex != null) {
      return;
    }
    _0x4906ec.pageData.closeTipsIndex = GM_addValueChangeListener("closeLJTS", function (_0x308410, _0x210ea9, _0x4a9078, _0x1c4398) {
      _0x4906ec.pageData.ljtsIndexArr.forEach(_0x5e7b15 => {
        _0x4906ec.pageData.closeTipsIndex = null;
        layer.close(_0x5e7b15);
      });
      _0x4906ec.pageData.ljtsIndexArr = [];
      _0x29ed3f && _0x4906ec.tipsAndClose && _0x4906ec.tipsAndClose(_0x34e7f5, _0x4fc206);
    });
  },
  tipsAndClose(_0x273918) {
    _0x4906ec.confirmRun("5秒后关闭当前页面", 5000).then(_0x359ed9 => {
      if (!_0x273918 || location.href == _0x273918) {
        window.close();
      }
    });
  },
  getGMKey(_0x1afe89) {
    return _0x1afe89;
    let _0x9c9bf8 = localStorage.getItem("ZFK_KEYPREFIX");
    if (!_0x9c9bf8) {
      _0x9c9bf8 = _0x4906ec.generateRandomString(10);
      localStorage.setItem("ZFK_KEYPREFIX", _0x9c9bf8);
    }
    let _0x592610 = ["token"];
    if (_0x592610.includes(_0x1afe89)) {
      return _0x1afe89;
    }
    return _0x9c9bf8 + "_";
  },
  closeWaitConfrimWin() {
    _0x4906ec.setGMData("closeLJTS", _0x4906ec.now());
  },
  confirmRun(_0x5e5dcf = "脚本：3秒后执行下一步操作", _0xbacacf = 3000) {
    return new Promise((_0x135af5, _0x2855cc) => {
      let _0x477b3f = true;
      clearTimeout(_0x4906ec.pageData.confirmRunIndex);
      const _0x22eaef = {
        icon: 3,
        title: "是否继续？",
        btn: ["取消执行"]
      };
      _0x4906ec.pageData.confirmRunIndex = layer.alert(_0x5e5dcf, _0x22eaef, function (_0x192809) {
        _0x477b3f = false;
        _0x2855cc();
        layer.close(_0x4906ec.pageData.confirmRunIndex);
      });
      setTimeout(() => {
        layer.close(_0x4906ec.pageData.confirmRunIndex);
        _0x135af5(true);
      }, _0xbacacf);
    });
  },
  gmAuthGet(_0x2f88d2, _0x10532b, _0x33aeee = _0x5d967e) {
    _0x2f88d2 = _0x4906ec.fullUrl(_0x2f88d2);
    if (_0x706d8e) {
      console.log("gmGet", _0x2f88d2);
    }
    return new Promise((_0xa89416, _0x5100c2) => {
      if (_0x2f88d2.indexOf("?") != -1) {
        for (key in _0x10532b) {
          _0x2f88d2 += "&" + key + "=" + _0x10532b[key];
        }
      } else {
        let _0x54d1f5 = true;
        for (key in _0x10532b) {
          _0x2f88d2 += (_0x54d1f5 ? "?" : "&") + (key + "=" + _0x10532b[key]);
          _0x54d1f5 = false;
        }
      }
      let _0x1c6f16 = {};
      if (_0x4906ec.getGMData("token", "")) {
        _0x1c6f16["X-Access-Token"] = this.getGMData("token", "");
      }
      GM_xmlhttpRequest({
        method: "get",
        url: _0x2f88d2,
        data: _0x10532b,
        headers: _0x1c6f16,
        responseType: "json",
        onload: function (_0x51662f) {
          if (_0x706d8e) {
            console.log(_0x51662f);
          }
          let _0x290ce8 = _0x51662f.response;
          if (_0x290ce8.code != 200) {
            if (_0x290ce8.message.indexOf("Token失效") != -1) {
              _0x4906ec.tipsLogin();
            } else {
              if (_0x33aeee.showErr) {
                layer.alert(_0x290ce8.message);
              }
            }
            _0x5100c2(_0x290ce8);
          } else {
            _0xa89416(_0x290ce8.result);
          }
        },
        onerror: function (_0x485713) {
          if (_0x706d8e) {
            console.log(_0x485713);
          }
          _0x5100c2(_0x485713);
        }
      });
    });
  },
  getUrlParam(_0x48e9f0) {
    var _0x53d7d5 = new RegExp("(^|&)" + _0x48e9f0 + "=([^&]*)(&|$)");
    var _0x44fca0 = window.location.search.substr(1).match(_0x53d7d5);
    if (_0x44fca0 != null) {
      return unescape(_0x44fca0[2]);
    }
    return null;
  },
  gmPost(_0x457268, _0x2d098c, _0x120a3e = _0x445b35) {
    _0x457268 = _0x4906ec.fullUrl(_0x457268);
    console.log("gmPost", _0x457268);
    return new Promise((_0x23c97b, _0xe19860) => {
      GM_xmlhttpRequest({
        method: "post",
        url: _0x457268,
        data: JSON.stringify(_0x2d098c),
        headers: {
          "Content-Type": "application/json"
        },
        responseType: "json",
        onload: function (_0xada7a0) {
          let _0x2bb34a = _0xada7a0.response;
          console.log(_0x2bb34a);
          if (_0x2bb34a.code != 200 && _0x120a3e.showErr) {
            layer.alert(_0x2bb34a.message);
            return;
          }
          _0x23c97b(_0x2bb34a);
        },
        onerror: function (_0x3d9198) {
          console.log(_0x3d9198);
          _0xe19860(_0x3d9198);
        }
      });
    });
  },
  toLogin() {
    top.location.href = _0x4906ec.url.login + "?yh=" + window.btoa(encodeURI(top.location.href));
  },
  waitTimeout(_0x2ad9ac) {
    return new Promise((_0x3bd1bd, _0x1364c2) => {
      setTimeout(() => {
        _0x3bd1bd();
      }, _0x2ad9ac);
    });
  },
  fullUrl(_0x8a2f96, _0x42ac74 = "") {
    if (!_0x42ac74) {
      _0x42ac74 = _0x4906ec.url.base;
    }
    if (!_0x8a2f96.startsWith("http")) {
      return _0x42ac74 + _0x8a2f96;
    }
    return _0x8a2f96;
  },
  waitOf(_0xd1ed8e, _0x11bea6 = 1000, _0x6a00e0 = 30) {
    console.log("%c waitOf", "background:rgb(0,0,0);color:#fff", _0xd1ed8e);
    return new Promise((_0x372669, _0x27eb8c) => {
      let _0x3e560d = _0x6a00e0 * 1000;
      try {
        if (_0xd1ed8e()) {
          return _0x372669();
        }
      } catch (_0x2ec1b1) {
        console.error(_0x2ec1b1);
      }
      let _0x10674f = setInterval(() => {
        try {
          if (_0x6a00e0 != -1) {
            _0x3e560d -= _0x11bea6;
            if (_0x3e560d < 0) {
              clearInterval(_0x10674f);
              return _0x27eb8c();
            }
          }
          if (_0xd1ed8e()) {
            clearInterval(_0x10674f);
            return _0x372669();
          }
        } catch (_0x297fe9) {
          console.error(_0x297fe9);
        }
      }, _0x11bea6);
    });
  },
  getPromiseWithAbort(_0xb20473) {
    let _0x358200 = {};
    let _0xc8e516 = new Promise(function (_0x55b0c2, _0x47a4ed) {
      _0x358200.abort = _0x47a4ed;
    });
    _0x358200.promise = Promise.race([_0xb20473, _0xc8e516]);
    return _0x358200;
  },
  delGMData(_0x5a2e75, _0x4d4fd5) {
    return GM_deleteValue(_0x5a2e75);
  },
  getGMData(_0x4846bc, _0x3db0f0) {
    return GM_getValue(_0x4846bc, _0x3db0f0);
  },
  setGMData(_0x4df6dd, _0x364d7f) {
    return GM_setValue(_0x4df6dd, _0x364d7f);
  },
  addStyle() {
    GM_addStyle("\n      .zfk-btn{background-color:#0fbcf9;color:white;padding:4px 12px;border:none;box-sizing:content-box;font-size:14px;height:20px;border-radius:4px;cursor:pointer;display:inline-block;border:1px solid transparent;white-space:nowrap;user-select:none;text-align:center;vertical-align:middle}.zfk-btn:hover{opacity:.8}.zfk-btn.success{background-color:#38b03f}.zfk-btn.warning{background-color:#f1a325}.zfk-btn.info{background-color:#03b8cf}.zfk-btn.danger{background-color:#ea644a}.zfk-form-tips{font-size:1.2em;color:red}.tips{color:red}.zfk-form textarea,.zfk-form input[type=text],.zfk-form input[type=number],.zfk-form input[type=password]{border:1px solid #888;border-radius:4px;padding:5px;box-sizing:border-box}.zfk-form textarea{width:100%}.zfk-form-item{margin-bottom:10px}.zfk-form-item>label:first-child{width:7em;text-align:right;display:inline-block;padding-right:5px;margin-right:0}.zfk-form-item label{margin-right:4px}.zfk-form-item.block>label:first-child{text-align:left;display:block;width:100%;font-weight:bold}.text-l{text-align:left !important}.text-c{text-align:center !important}.text-r{text-align:right !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.p-t-0{padding-top:0px !important}.p-t-5{padding-top:5px !important}.p-t-10{padding-top:10px !important}.p-t-15{padding-top:15px !important}.p-t-20{padding-top:20px !important}.p-b-0{padding-bottom:0px !important}.p-b-5{padding-bottom:5px !important}.p-b-10{padding-bottom:10px !important}.p-b-15{padding-bottom:15px !important}.p-b-20{padding-bottom:20px !important}.p-l-0{padding-left:0px !important}.p-l-5{padding-left:5px !important}.p-l-10{padding-left:10px !important}.p-l-15{padding-left:15px !important}.p-l-20{padding-left:20px !important}.p-r-0{padding-right:0px !important}.p-r-5{padding-right:5px !important}.p-r-10{padding-right:10px !important}.p-r-15{padding-right:15px !important}.p-r-20{padding-right:20px !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.m-t-0{margin-top:0px !important}.m-t-5{margin-top:5px !important}.m-t-10{margin-top:10px !important}.m-t-15{margin-top:15px !important}.m-t-20{margin-top:20px !important}.m-b-0{margin-bottom:0px !important}.m-b-5{margin-bottom:5px !important}.m-b-10{margin-bottom:10px !important}.m-b-15{margin-bottom:15px !important}.m-b-20{margin-bottom:20px !important}.m-l-0{margin-left:0px !important}.m-l-5{margin-left:5px !important}.m-l-10{margin-left:10px !important}.m-l-15{margin-left:15px !important}.m-l-20{margin-left:20px !important}.m-r-0{margin-right:0px !important}.m-r-5{margin-right:5px !important}.m-r-10{margin-right:10px !important}.m-r-15{margin-right:15px !important}.m-r-20{margin-right:20px !important}.title1{font-size:20px;line-height:28px;font-weight:bold}.bold{font-weight:bold !important}.tips-box{padding:10px;border:1px solid red;background-color:#fff0f0;color:red}.bold{font-weight:bold}.font-l{font-size:1.2em}.font-xl{font-size:40px}.font-l{font-size:25px}.color-default{color:#ea644a !important}.color-success{color:#38b03f !important}.color-warning{color:#f1a325 !important}.color-danger{color:#ea644a !important}.bg-default{background-color:#ea644a !important}.bg-success{background-color:#38b03f !important}.bg-warning{background-color:#f1a325 !important}.bg-danger{background-color:#ea644a !important}\n      ");
  }
});
_0x4906ec.setGMData("version", _0x4906ec.setting.version.version);
_0x4906ec.init();
unsafeWindow.zfk = _0x4906ec;