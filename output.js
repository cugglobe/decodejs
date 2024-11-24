//11/24/2024, 7:18:02 PM
//Project:https://github.com/dream385/decode
let _0x30587c = true,
  _0x48445f = true;
_0x48445f = false;
_0x30587c = false;
let _0x22ef36 = Object.assign(baseConfig, {
  "setting": {
    "tjjl": "推荐购买脚本，返佣40%",
    "version": {
      "version": "202409182241",
      "body": "<div style=\"padding:10px;\">第一版本</div>"
    }
  },
  "pageData": {
    "url": "",
    "isFinishVideo": false,
    "video": {
      "index": null
    },
    "valueChangeIndex": {
      "list": null,
      "courseFinish": null,
      "videoPageCheck": null
    }
  },
  async "init"() {
    console.log("%c init", "background:rgb(255,0,0);color:#fff");
    unsafeWindow.window === unsafeWindow.top && _0x22ef36.registerMenuCommandTemplate();
    let _0x4cb9a7 = unsafeWindow.alert;
    unsafeWindow.alert = function (_0xb04de2) {
      _0xb04de2 == "选课成功!" ? layer.alert(_0xb04de2) : _0x4cb9a7(_0xb04de2);
    };
    this.addStyle();
    this.setPageData();
    if (location.href.indexOf("user/login?yh=") != -1) {
      console.log("%c user/login?yh", "background:rgb(255,0,0);color:#fff");
      _0x22ef36.page_yhwelcome();
      return;
    } else {
      if (location.href.indexOf("loginSuccess.html?yh=") != -1) {
        console.log("%c loginSuccess.html?yh", "background:rgb(255,0,0);color:#fff");
        _0x22ef36.page_yhwelcome2();
      }
    }
    let _0x52ea06 = await _0x22ef36.checkVersion();
    if (_0x52ea06) _0x22ef36.begin();
  },
  async "begin"() {
    console.log("%c begin", "background:rgb(255,0,0);color:#fff");
    if (_0x22ef36.matchUrl("/LearningCourse.aspx")) await _0x22ef36.setUserName_http(), _0x22ef36.page_list();else {
      if (_0x22ef36.matchUrl("/newgdceportal/study/StudyCenter.aspx")) await _0x22ef36.setUserName_http();else {
        if (_0x22ef36.matchUrl("gdceportal/Study/StudyCenter.aspx")) await _0x22ef36.setUserName_http();else {
          if (location.href.includes("/play_pc/playdo_pc.html")) _0x22ef36.page_videoTop();else {
            if (_0x22ef36.matchUrl("/playmp4_pc.html") || _0x22ef36.matchUrl("/CourseWare")) {
              _0x22ef36.page_video();
            } else {
              if (location.href.includes("/Study/ReqCourse.aspx?")) _0x22ef36.page_ReqCourse();else {
                if (location.href.includes("/Study/CourseDetail.aspx?")) _0x22ef36.page_CourseDetail();else location.href.includes("/workshopindex/mergeClass") && (await _0x22ef36.setUserName_http(), _0x22ef36.page_mergeClass(false));
              }
            }
          }
        }
      }
    }
  },
  async "page_mergeClass"(_0x455d3a = true) {
    console.log("%c page_CourseDetail", "background:rgb(255,0,0);color:#fff");
    await _0x22ef36.gmAuthDownScore("3353432c32fe424a8a1e1a395cc01171");
    _0x22ef36.closeWaitConfrimWin();
    await _0x22ef36.waitOf(_0x120603 => $(".item_box").length > 0);
    await _0x22ef36.waitTimeout(300);
    if (_0x455d3a == false) {
      let _0x254e32 = _0x22ef36.getGMData("autoRunListTime", 0);
      if (_0x22ef36.now() - _0x254e32 > 20 * 1000) return;
      let _0x200cb8 = $("[role=\"tablist\"] [role=\"tab\"]").index($("[role=\"tablist\"] [role=\"tab\"].is-active")),
        _0x5ad987 = _0x22ef36.getGMData("tabIndex", 0);
      _0x200cb8 != _0x5ad987 && ($("[role=\"tablist\"] [role=\"tab\"]").eq(_0x5ad987).click(), await _0x22ef36.waitTimeout(1000), await _0x22ef36.waitOf(_0x3d3682 => $(".item_box:visible").length > 0), await _0x22ef36.waitTimeout(1000));
    }
    if (_0x455d3a) {
      if ($(".item_box:visible").length == 0) {
        _0x22ef36.tipsMsg("请切换到需要学课的课程列表后再点击");
        return;
      }
      let _0x22416d = $("[role=\"tablist\"] [role=\"tab\"]").index($("[role=\"tablist\"] [role=\"tab\"].is-active"));
      _0x22ef36.setGMData("tabIndex", _0x22416d);
    }
    let _0x464346 = null;
    $(".item_box:visible").each((_0x23eb45, _0x3328e7) => {
      let _0x3ea0c0 = Number($(_0x3328e7).find("[role=\"progressbar\"]").attr("aria-valuenow"));
      if (_0x3ea0c0 < 99) return _0x464346 = $(_0x3328e7), false;
    });
    if (_0x464346 == null) {
      _0x22ef36.alertMsg("学习完成");
      return;
    }
    _0x22ef36.setGMData("listUrl", location.href);
    _0x22ef36.confirmRun("3秒后执行下一步", 3000).then(async _0x19f69c => {
      _0x22ef36.setGMData("videoType", "2");
      _0x464346.find(".item_title").click();
      await _0x22ef36.openLjTips();
    });
  },
  async "page_CourseDetail"() {
    console.log("%c page_CourseDetail", "background:rgb(255,0,0);color:#fff");
    await _0x22ef36.waitOf(_0x5a9546 => $("input[value=\"继续选课\"]").length > 0, 300);
    $.ajax({
      "url": "/gdceportal/Study/CourseDetail.aspx?id=" + _0x22ef36.parseQueryString(location.href).id,
      "type": "POST",
      "contentType": "application/x-www-form-urlencoded",
      "data": {
        "__VIEWSTATE": $("#__VIEWSTATE").val(),
        "__VIEWSTATEGENERATOR": $("#__VIEWSTATEGENERATOR").val(),
        "__EVENTVALIDATION": $("#__EVENTVALIDATION").val(),
        "btnConfirm2": $("#btnConfirm2").val()
      },
      "success": _0x2d0ccc => {
        _0x22ef36.tipsMsg("选课完成");
        _0x22ef36.setGMData("xkFinish", _0x22ef36.now());
        window.close();
      }
    });
  },
  async "page_ReqCourse"() {
    console.log("%c page_ReqCourse", "background:rgb(255,0,0);color:#fff");
    await _0x22ef36.waitOf(_0x37a878 => $(".course-list-title").length > 0, 300);
    GM_addValueChangeListener("xkFinish", function (_0x4c9424, _0x1b12aa, _0x58a51e, _0x3fc45f) {
      location.reload();
    });
    let _0x1e7bde = null;
    $(".course-list-title").each((_0x3176ef, _0x128dcd) => {
      if ($(_0x128dcd).parents("tr:first").text().includes("进入选课")) return _0x1e7bde = $(_0x128dcd).parents("tr:first"), false;
    });
    if (_0x1e7bde != null) {
      _0x22ef36.confirmRun("1秒后打开选课", 1000).then(_0x4de13a => {
        _0x1e7bde.find("a:last")[0].click();
      });
    } else {
      let _0x246135 = Number($("#lblCurrentPage").text()),
        _0x591a8e = Number($("#lblPage").text());
      _0x246135 < _0x591a8e ? _0x22ef36.confirmRun("3秒后翻页", 1000).then(_0x20d1a9 => {
        $("#btnNextPage").click();
      }) : _0x22ef36.tipsMsg("本目录已全部选课完成");
    }
  },
  async "checkVersion"() {
    return new Promise(_0x5a8f6e => {
      if (_0x48445f) {
        _0x22ef36.delGMData("code");
      }
      if (!top === window || _0x48445f) return _0x5a8f6e(true);
      _0x22ef36.gmPost("/yh/base/checkVersion", {
        "id": baseConfig.project.id,
        "v1": baseConfig.project.version,
        "v2": _0x22ef36.getGMData("version", "")
      }).then(_0x2de12c => {
        if (_0x2de12c.message == "更新脚本") layer.alert(_0x2de12c.result.msg, function () {
          top.open(_0x2de12c.result.url);
        });else _0x2de12c.message == "更新内容" && (_0x22ef36.delGMData("code"), location.href = location.href);
        return _0x5a8f6e(true);
      }, _0x256547 => {
        console.log(_0x256547);
      });
    });
  },
  async "page_videoTop"() {
    console.log("%c page_videoTop", "background:rgb(0,0,0);color:#fff");
    _0x22ef36.closeWaitConfrimWin();
    let _0x282bf8 = true;
    GM_addValueChangeListener("refreshListCallback", function (_0x15aa3f, _0x3ec8b1, _0x38513c, _0x4cbe11) {
      _0x282bf8 = false;
    });
    GM_addValueChangeListener("openListPage", async function (_0x53f85b, _0x5edcee, _0x2137dc, _0x2fcc17) {
      _0x22ef36.confirmRun().then(_0x5d0dfa => {
        _0x22ef36.setGMData("refreshList", _0x22ef36.now());
        setTimeout(async () => {
          if (_0x282bf8) {
            window.open(_0x22ef36.getGMData("listUrl", "/"));
            _0x22ef36.setGMData("autoRunListTime", _0x22ef36.now());
            _0x22ef36.openLjTips(true, true, 3000);
            return;
          }
          unsafeWindow.closePage();
        }, 1000);
      });
    });
    GM_addValueChangeListener("closeVideo", function (_0x4afcc0, _0x2cd533, _0xc209f8, _0xa1b37) {
      _0x22ef36.setGMData("refreshList", _0x22ef36.now());
      unsafeWindow.closePage();
    });
    GM_addValueChangeListener("updateTitle", function (_0x44948f, _0x38a04c, _0x33b6c0, _0x40d503) {
      $("title").text(_0x33b6c0);
    });
    let _0x5d154d = _0x22ef36.getGMData("finishVideoID", null);
    await _0x22ef36.waitOf(_0x44d7f9 => unsafeWindow.courseId);
    _0x5d154d == courseId && _0x22ef36.confirmRun("检测到当前课程实际已经完成，5秒后结束观看", 5000).then(_0x4630ed => {
      _0x22ef36.setGMData("refreshList", _0x22ef36.now());
      unsafeWindow.closePage();
    });
  },
  "page_StudyCenter2"() {
    _0x22ef36.waitOf(_0x4bab7c => $(".text_userName>span").text().trim() != "").then(_0x5754fd => {
      let _0x39df79 = $(".text_userName>span").text().trim();
      _0x22ef36.setGMData("username", _0x39df79);
    });
  },
  "page_StudyCenter"() {
    _0x22ef36.waitOf(_0x2b8df5 => $(".userName-item").text().trim() != "").then(_0xa1fd1f => {
      let _0x5a9bf8 = $(".userName-item").text().trim();
      _0x22ef36.setGMData("username", _0x5a9bf8);
    });
  },
  async "setUserName_http"() {
    return new Promise(async (_0x22e317, _0x54f494) => {
      $.get("/gdceportal/study/BaseInfo.aspx", _0x1809ec => {
        let _0x50b4ac = _0x1809ec,
          _0x26d698 = $("<html>" + _0x50b4ac + "</html>").find("#lblShowName").text().trim();
        if (!_0x26d698) {
          return _0x22ef36.alertMsg("您的学习网站账号掉线了，请重新登录"), _0x54f494();
        }
        return _0x22ef36.setGMData("username", _0x26d698), _0x22e317();
      });
    });
  },
  "page_videoRun"() {
    GM_removeValueChangeListener(_0x22ef36.pageData.valueChangeIndex.videoPageCheck);
    _0x22ef36.pageData.valueChangeIndex.videoPageCheck = GM_addValueChangeListener("videoPageCheck", function (_0x1c975d, _0x56ba2c, _0x3d0601, _0x3ed955) {
      console.log("videoPageCheck", arguments);
      _0x22ef36.setGMData("videoPageIsRun", new Date().getTime());
    });
  },
  "isDZKFMode"() {
    let _0x4b946d = typeof loadFun == "function" && loadFun.toString().includes("var data = res.response;");
    if (!_0x4b946d) _0x4b946d = typeof isDZKF == "boolean" && !!isDZKF;
    return _0x4b946d;
  },
  async "page_video"() {
    _0x22ef36.closeWaitConfrimWin();
    await _0x22ef36.gmAuthDownScore("3353432c32fe424a8a1e1a395cc01171");
    console.log("%c page_video", "background:rgb(0,0,0);color:#fff");
    let _0x26b933 = 2;
    _0x22ef36.closeWaitConfrimWin();
    if (_0x22ef36.pageData.video.index != null) {
      return;
    }
    let _0x23a472 = _0x22ef36.getConfig();
    _0x22ef36.pageData.video.index = setInterval(async () => {
      try {
        if (_0x22ef36.pageData.waitTime > 0) {
          _0x22ef36.pageData.waitTime -= _0x26b933;
          return;
        }
        if (!_0x22ef36.getVideo()) {
          console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
          return;
        }
        _0x22ef36.getVideo().volume = 0;
        try {
          let _0x1f5bbc = "进度：" + _0x22ef36.getCurTime().toFixed(0) + "/" + _0x22ef36.getTotalTime().toFixed(0);
          _0x22ef36.setGMData("updateTitle", _0x1f5bbc);
        } catch (_0x14a26f) {}
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x2fb659 = _0x22ef36.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
        _0x2fb659 != null && _0x2fb659.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
        let _0x48525b = await _0x22ef36.isPlayFinish();
        if (_0x48525b) {
          _0x22ef36.pageData.waitTime = 15;
          layer.msg("视频即将结束，等待下一步操作", {
            "time": 10 * 1000
          });
          _0x22ef36.nextVideo();
          clearInterval(_0x22ef36.pageData.video.index);
          _0x22ef36.pageData.video.index = null;
          return;
        }
        let _0x21b001 = await _0x22ef36.videoIsPlay();
        if (!_0x21b001) {
          !_0x48525b && _0x22ef36.play();
        }
      } catch (_0x15bbd2) {
        console.error("视频页面定时器出错", _0x15bbd2);
      }
    }, _0x26b933 * 1000);
  },
  "isPlayFinish"() {
    try {
      return _0x22ef36.getTotalTime() > 0 && _0x22ef36.getCurTime() + 5 >= _0x22ef36.getTotalTime();
    } catch (_0x134ab7) {
      return false;
    }
  },
  "getCurTime"() {
    let _0xd18509 = 0;
    try {
      _0xd18509 = _0x22ef36.getVideo().currentTime;
    } catch (_0x53cf04) {
      console.error(_0x53cf04);
    }
    return _0xd18509;
  },
  "getTotalTime"() {
    let _0x37841c = 0;
    try {
      _0x37841c = _0x22ef36.getVideo().duration;
    } catch (_0x39d46e) {
      console.error(_0x39d46e);
    }
    return _0x37841c;
  },
  async "videoIsPlay"() {
    return new Promise(_0x2d1860 => {
      try {
        let _0x23cd2f = $("video")[0].currentTime;
        setTimeout(() => {
          let _0xef522b = $("video")[0].currentTime,
            _0x56fedc = _0xef522b > _0x23cd2f;
          if (_0x56fedc) setTimeout(() => {
            let _0x403a32 = $("video")[0].currentTime,
              _0x4b6f06 = _0x403a32 > _0xef522b;
            _0x2d1860(_0x4b6f06);
          }, 100);else return _0x2d1860(false);
        }, 100);
      } catch (_0x5df60c) {
        _0x2d1860(false);
      }
    });
  },
  "nextVideo"(_0x2b7424 = 10) {
    layer.msg("视频即将结束，等待下一步操作", {
      "time": 10 * 1000
    });
    setTimeout(() => {
      _0x22ef36.setGMData("openListPage", _0x22ef36.now());
    }, _0x2b7424 * 1000);
  },
  "page_video_old"() {
    console.log("%c page_video", "background:rgb(255,0,0);color:#fff");
    _0x22ef36.closeWaitConfrimWin();
    _0x22ef36.checkVideoPlay();
    _0x22ef36.waitOf(_0x3459cf => {
      if (!!unsafeWindow.myPlayer && !!unsafeWindow.myPlayer.volume) {
        return unsafeWindow.myPlayer.volume(0), console.log("静音完成"), true;
      }
      return false;
    });
    let _0x555517 = -1;
    _0x22ef36.waitOf(_0x286359 => {
      if (!!unsafeWindow.myPlayer && !!unsafeWindow.myPlayer.duration) {
        _0x555517 = unsafeWindow.myPlayer.currentTime();
        if (unsafeWindow.myPlayer.currentTime() >= unsafeWindow.myPlayer.duration()) return true;
      }
      return false;
    }, 1000, -1).then(_0x1caf16 => {
      _0x22ef36.confirmRun("检测到当前课程实际已经完成，5秒后结束观看。如果进度不正常，请点击下面【取消执行】按钮，推动进度补充学习时长", 5000).then(_0xbfdf2a => {
        _0x22ef36.setGMData("refreshList", _0x22ef36.now());
        _0x22ef36.setGMData("closeVideo", _0x22ef36.now());
      });
    });
    setInterval(() => {
      unsafeWindow.myPlayer.currentTime() == _0x555517 && _0x22ef36.confirmRun("检测到视频好像卡住了，准备重新载入视频开始播放", 10 * 1000).then(_0x4f6434 => {
        console.log("check 卡住");
        _0x22ef36.setGMData("refreshList", _0x22ef36.now());
        _0x22ef36.setGMData("closeVideo", _0x22ef36.now());
      });
    }, 1 * 60 * 1000);
  },
  async "page_list"() {
    console.log("%c page_list", "background:rgb(255,0,0);color:#fff");
    await _0x22ef36.gmAuthDownScore("3353432c32fe424a8a1e1a395cc01171");
    $("body").prepend("<div style=\"padding: 10px;background: #517ddb;color: #fff;text-align: center;font-size: 20px;\">\n        <p>因每个地方课程学习要求不一样，请先手动选好课程后再使用脚本。</p>\n        <p>部分课程视频无法播放，非脚本问题。对于这类课程或PPT课程，请取消选课或者先点击【跳过】按钮设置跳过，后面手动来补一下学时。</p>\n        </div>");
    _0x22ef36.setGMData("videoType", "1");
    _0x22ef36.setGMData("closeVideo", _0x22ef36.now());
    GM_addValueChangeListener("refreshList", function (_0x5addb3, _0x5a2498, _0x3aa481, _0x2c1a6c) {
      _0x22ef36.setGMData("refreshListCallback", _0x22ef36.now());
      _0x22ef36.confirmRun("3秒后刷新页面更新最新进度").then(_0x1e8681 => {
        top.location.reload();
      });
    });
    _0x22ef36.clickNextCourse();
  },
  "checkVideoPlay"() {
    let _0x4ddce7 = _0x22ef36.getCurTime();
    return new Promise(_0x2d098b => {
      setTimeout(() => {
        if (_0x22ef36.getTotalTime() > 0 && _0x22ef36.getCurTime() == _0x4ddce7) {
          _0x22ef36.play();
        }
        _0x4ddce7 = _0x22ef36.getCurTime();
        _0x2d098b();
      }, 3000);
    });
  },
  "timeSecondsFormat"(_0xc4905c) {
    _0xc4905c = Math.floor(Math.abs(_0xc4905c));
    var _0x10b265 = Math.floor(_0xc4905c / 3600);
    var _0x2c87f1 = Math.floor(_0xc4905c % 3600 / 60);
    var _0x4c68ab = _0xc4905c % 60;
    _0x10b265 = _0x10b265 < 10 ? "0" + _0x10b265 : _0x10b265;
    _0x2c87f1 = _0x2c87f1 < 10 ? "0" + _0x2c87f1 : _0x2c87f1;
    _0x4c68ab = _0x4c68ab < 10 ? "0" + _0x4c68ab : _0x4c68ab;
    return _0x10b265 + ":" + _0x2c87f1 + ":" + _0x4c68ab;
  },
  "setSkipHtml"() {
    let _0x21bb3b = _0x22ef36.getGMData("skipList", []);
    $(".zfk-skip").remove();
    $(".listframe tr").not(".listheader").each((_0x673b61, _0x2eeace) => {
      let _0x572ebe = _0x22ef36.parseQueryString($(_0x2eeace).find("td:first a").attr("href")).id.replace(/[^a-zA-Z0-9]/g, "");
      if (_0x21bb3b.includes(_0x572ebe)) {
        $(_0x2eeace).find("td:first a").html("<span class=\"zfk-skip tips\">[已跳过]</span>" + $(_0x2eeace).find("td:first a").text());
        $(_0x2eeace).find("td:first").append("<button type=\"button\" class=\"zfk-btn zfk-skip\" onclick=\"zfk.skip('" + _0x572ebe + "',false)\">取消跳过</button>");
      } else $(_0x2eeace).find("td:first").append("<button type=\"button\" class=\"zfk-btn zfk-skip\"  onclick=\"zfk.skip('" + _0x572ebe + "',true)\">跳过</button>");
    });
  },
  "clickNextCourse"() {
    console.log("%c clickNextCourse", "background:rgb(255,0,0);color:#fff");
    _0x22ef36.waitOf(_0x20c1f0 => $(".listframe tr").not(".listheader").length > 0).then(_0x554d46 => {
      let _0x3a1fe4 = unsafeWindow.w;
      unsafeWindow.w = _0x1aa2b9 => {
        _0x22ef36.setGMData("finishVideoID", null);
        if (_0x22ef36.pageData.isFinishVideo) {
          let _0x587453 = _0x22ef36.parseQueryString(_0x1aa2b9);
          if (_0x587453.courseId) {
            _0x22ef36.setGMData("finishVideoID", _0x587453.courseId);
          }
        }
        _0x3a1fe4(_0x1aa2b9);
      };
      _0x22ef36.pageData.isFinishVideo = false;
      _0x22ef36.setSkipHtml();
      let _0x4e2808 = _0x22ef36.getGMData("skipList", []);
      $(".listframe tr").not(".listheader").each((_0x3e80ac, _0x39cdfd) => {
        let _0x339e6f = _0x22ef36.parseQueryString($(_0x39cdfd).find("td:first a").attr("href")).id.replace(/[^a-zA-Z0-9]/g, "");
        if (_0x4e2808.includes(_0x339e6f)) return true;
        let _0x1fa02c = Number($(_0x39cdfd).find("td").eq(4).text().trim().replace("%", ""));
        if (_0x1fa02c == 100) return true;
        let _0x37d265 = top.location.href;
        return _0x37d265.toUpperCase().includes("/gdceportal/study/studyCenter.aspx?".toUpperCase()) && (_0x37d265 = _0x37d265.split("?")[0]), _0x22ef36.setGMData("listUrl", _0x37d265), _0x22ef36.confirmRun("3秒后开始下一步", 3000).then(_0x3d2ffd => {
          let _0x13077a = Number($(_0x39cdfd).find("td").eq(5).find("a").attr("title").replace(/[^0-9\.]*/g, ""));
          _0x22ef36.pageData.isFinishVideo = _0x13077a == 100;
          $(_0x39cdfd).find("td").eq(5).find("a")[0].click();
          _0x22ef36.alertMsg("请勿关闭当前页面，脚本会在视频播放完毕后自动开启下一门课程学习");
        }), false;
      });
    });
  },
  "skip"(_0x3820da, _0x1c4f0d) {
    let _0x4bcb5c = _0x22ef36.getGMData("skipList", []);
    if (_0x1c4f0d && !_0x4bcb5c.includes(_0x3820da)) _0x4bcb5c.push(_0x3820da), _0x22ef36.setGMData("skipList", _0x4bcb5c), layer.msg("设置跳过成功"), _0x22ef36.setSkipHtml();else {
      if (!_0x1c4f0d && _0x4bcb5c.includes(_0x3820da)) {
        let _0xe87568 = _0x4bcb5c.findIndex(_0x757ffd => _0x757ffd == _0x3820da);
        _0x4bcb5c.splice(_0xe87568, 1);
        _0x22ef36.setGMData("skipList", _0x4bcb5c);
        layer.msg("取消跳过成功");
        _0x22ef36.setSkipHtml();
      }
    }
  },
  "nextPage"() {
    console.log("%c nextPage", "background:rgb(255,0,0);color:#fff");
    let _0x48aec0 = $(".progressvalue").eq(0).parents("tr")[0];
    $(".paginate_active").next()[0].click();
    _0x22ef36.waitOf(_0x69e0b2 => $(".progressvalue").eq(0).parents("tr")[0] !== _0x48aec0).then(_0x15bb9d => {
      _0x22ef36.clickNextCourse();
    });
  },
  "play"() {
    $("video")[0].volume = 0;
    $("video")[0].play();
  },
  "setStep"() {
    _0x22ef36.getTotalTime() > 60 && ($("video")[0].currentTime = _0x22ef36.getTotalTime() - 3);
  },
  "getVideo"() {
    if ($("video").length == 0) return undefined;
    return $("video")[0];
  },
  "showVersionAlert"(_0x379372 = true) {
    let _0x4168c4 = _0x22ef36.getGMData("showVersionAlert", "");
    if (!_0x379372 && _0x4168c4 == _0x22ef36.getGMData("version")) return;
    layer.open({
      "type": "1",
      "title": "版本号：" + _0x22ef36.setting.version.version,
      "content": _0x22ef36.setting.version.body,
      "btn": "我知道了",
      "area": ["600px", "auto"],
      "yes": function (_0xf05d97) {
        _0x22ef36.setGMData("showVersionAlert", _0x22ef36.getGMData("version"));
        layer.close(_0xf05d97);
      }
    });
  },
  "registerMenuCommandTemplate"() {
    GM_registerMenuCommand("我的信息", _0x22ef36.myInfo);
    GM_registerMenuCommand("启动专题学习", _0x22ef36.page_mergeClass);
    GM_registerMenuCommand("联系作者", _0x22ef36.linkAuthor);
    GM_registerMenuCommand("版本：" + _0x22ef36.setting.version.version, _0x22ef36.showVersionAlert);
  },
  "linkAuthor"() {
    window.open("http://doc.zhanyc.cn/contact-me/");
  },
  "logout"() {
    _0x22ef36.delGMData("token");
    layer.msg("脚本账号已退出");
  },
  "setClip"(_0x7389bf) {
    GM_setClipboard(_0x7389bf, "text");
    layer.msg("复制成功");
  },
  "callAuthSuccess"() {
    _0x22ef36.setGMData("authSuccess", _0x22ef36.now());
  },
  "initBuyAuth"() {
    !_0x22ef36.pageData.authListnerIndex && (_0x22ef36.pageData.authListnerIndex = GM_addValueChangeListener("authSuccess", function (_0x318b60, _0x5ad485, _0xbd5e68, _0x486447) {
      _0x486447 && (layer.close(_0x22ef36.pageData.myInfoIndex), layer.close(_0x22ef36.pageData.noAuthIndex), layer.open({
        "type": "1",
        "offset": "100px",
        "title": "脚本授权提示",
        "content": "<div style=\"padding:16px;font-size:20px;\">😃授权购买成功，刷新页面后授权生效</div>"
      }));
    }));
    !_0x22ef36.buyAuthFun && (_0x22ef36.buyAuthFun = function () {
      let _0x551f97 = "https://m.zhanyc.cn";
      _0x48445f && (_0x551f97 = "http://localhost:3000");
      window.open(_0x551f97 + "/yh-auth?i=" + baseConfig.project.id + "&t=" + _0x22ef36.getGMData("token"));
    });
  },
  "myInfo"() {
    _0x22ef36.initBuyAuth();
    _0x22ef36.gmAuthPost("/yh/user/myInfo").then(_0x371e82 => {
      if (_0x48445f) console.log(_0x371e82);
      let _0x57d6a4 = "脚本ID：【" + baseConfig.project.id + "】 脚本账号昵称：【" + _0x371e82.name + "】 脚本账号：【" + _0x371e82.acc + "】",
        _0x539dcd = "\n        <div class=\"p-10 zfk-container\" style=\"padding: 10px;\">\n        <div class=\"kv\" style=\"text-align: center;color: #ffffff;background: #38a1ff;font-weight: bold;margin: -10px -10px 10px;\">" + (_0x22ef36.setting.tjjl || "") + "</div>\n        <div class=\"kv\"><label>脚本ID：</label><span>【" + baseConfig.project.id + "】</span></div>\n        <div class=\"kv\"><label>脚本账号昵称：</label><span>【" + _0x371e82.name + "】</span></div>\n        <div class=\"kv\"><label>脚本账号：</label><span>【" + _0x371e82.acc + "】</span></div>\n\n        <div class=\"kv\" style=\"text-align: center;margin: 10px 0 20px;\">\n          <button onclick=\"zfk.buyAuthFun()\" style=\"cursor: pointer;background:#BE2EDD;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">自助购买授权（👍推荐）</button>\n          <button onclick=\"zfk.setClip('" + _0x57d6a4 + "')\" style=\"cursor: pointer;background:#34495E;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">点这里复制以上信息</button>\n        </div>\n        <div class=\"kv\" style=\"text-align: center;\">\n          <button onclick=\"window.open('https://www.todesk.com/download.html')\" style=\"cursor: pointer;background:#009349;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">下载远程控制软件（需要协助才下载）</button>\n          <button onclick=\"zfk.logout()\" style=\"cursor: pointer;background:#FF6B81;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">退出脚本账号</button>\n        </div>\n        </div>\n        ";
      _0x22ef36.pageData.myInfoIndex = layer.open({
        "type": "1",
        "title": "脚本信息",
        "content": _0x539dcd,
        "area": ["460px", "300px"],
        "offset": "100px"
      });
    });
  },
  "addStyle"() {
    GM_addStyle("\n      .zfk-btn{background-color:#0fbcf9;color:white;padding:4px 12px;border:none;box-sizing:content-box;font-size:14px;height:20px;border-radius:4px;cursor:pointer;display:inline-block;border:1px solid transparent;white-space:nowrap;user-select:none;text-align:center;vertical-align:middle}.zfk-btn:hover{opacity:.8}.zfk-btn.success{background-color:#38b03f}.zfk-btn.warning{background-color:#f1a325}.zfk-btn.info{background-color:#03b8cf}.zfk-btn.danger{background-color:#ea644a}.zfk-form-tips{font-size:1.2em;color:red}.tips{color:red}.zfk-form textarea,.zfk-form input[type=text],.zfk-form input[type=number],.zfk-form input[type=password]{border:1px solid #888;border-radius:4px;padding:5px;box-sizing:border-box}.zfk-form textarea{width:100%}.zfk-form-item{margin-bottom:10px}.zfk-form-item>label:first-child{width:7em;text-align:right;display:inline-block;padding-right:5px;margin-right:0}.zfk-form-item label{margin-right:4px}.zfk-form-item.block>label:first-child{text-align:left;display:block;width:100%;font-weight:bold}.text-l{text-align:left !important}.text-c{text-align:center !important}.text-r{text-align:right !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.p-t-0{padding-top:0px !important}.p-t-5{padding-top:5px !important}.p-t-10{padding-top:10px !important}.p-t-15{padding-top:15px !important}.p-t-20{padding-top:20px !important}.p-b-0{padding-bottom:0px !important}.p-b-5{padding-bottom:5px !important}.p-b-10{padding-bottom:10px !important}.p-b-15{padding-bottom:15px !important}.p-b-20{padding-bottom:20px !important}.p-l-0{padding-left:0px !important}.p-l-5{padding-left:5px !important}.p-l-10{padding-left:10px !important}.p-l-15{padding-left:15px !important}.p-l-20{padding-left:20px !important}.p-r-0{padding-right:0px !important}.p-r-5{padding-right:5px !important}.p-r-10{padding-right:10px !important}.p-r-15{padding-right:15px !important}.p-r-20{padding-right:20px !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.m-t-0{margin-top:0px !important}.m-t-5{margin-top:5px !important}.m-t-10{margin-top:10px !important}.m-t-15{margin-top:15px !important}.m-t-20{margin-top:20px !important}.m-b-0{margin-bottom:0px !important}.m-b-5{margin-bottom:5px !important}.m-b-10{margin-bottom:10px !important}.m-b-15{margin-bottom:15px !important}.m-b-20{margin-bottom:20px !important}.m-l-0{margin-left:0px !important}.m-l-5{margin-left:5px !important}.m-l-10{margin-left:10px !important}.m-l-15{margin-left:15px !important}.m-l-20{margin-left:20px !important}.m-r-0{margin-right:0px !important}.m-r-5{margin-right:5px !important}.m-r-10{margin-right:10px !important}.m-r-15{margin-right:15px !important}.m-r-20{margin-right:20px !important}.bold{font-weight:bold !important}.tips-box{padding:10px;border:1px solid red;background-color:#fff0f0;color:red}.bold{font-weight:bold}.font-l{font-size:1.2em}.font-xl{font-size:40px}.font-l{font-size:25px}.color-default{color:#ea644a !important}.color-success{color:#38b03f !important}.color-warning{color:#f1a325 !important}.color-danger{color:#ea644a !important}.bg-default{background-color:#ea644a !important}.bg-success{background-color:#38b03f !important}.bg-warning{background-color:#f1a325 !important}.bg-danger{background-color:#ea644a !important}.zfk-table{border-collapse:collapse}.zfk-table thead{background-color:#1abc9c}.zfk-table td,.zfk-table th{text-align:center;padding:6px;border:1px solid #888}.zfk-table tr:nth-child(2n){background-color:#f2f2f2}.zfk-table tr:hover{background-color:#fff799}.zfk-container *{font-size:17px}\n      ");
  },
  "addMenu"() {
    if ($("#zfkLeftMenuContainer").length > 0) return;
    GM_addStyle("#zfkLeftMenuContainer{z-index:9999;position:fixed;left:0;top:40%;color:#fff}#zfkLeftMenuContainer .zfkLeftMenuStep{position:absolute;background:#3498db;width:max-content;top:-35px;display:block;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu{background:rgba(0,0,0,0.4);border-radius:0 4px 4px 0;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu:hover .zfkLeftMenuBtn-titile{width:auto}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtn-titile{cursor:pointer;word-wrap:break-word;width:1em;display:inline-block}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl{display:none;margin:0 -6px;box-sizing:border-box}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li{list-style:none;color:#fff !important;cursor:pointer;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li:hover{background:#000}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li::before{content:\"+ \"}#zfkIp51Config{padding:10px}");
    $("\n      <div id=\"zfkLeftMenuContainer\">\n      <div class=\"zfkLeftMenu\">\n        <span class=\"zfkLeftMenuBtn-titile\">菜单</span>\n        <ul class=\"zfkLeftMenuBtnUl\">\n          <li id=\"zfkMenuConfigBtn\">设置</li>\n        </ul>\n  \n      </div>\n      </div>\n        ").appendTo("body");
    $("#zfkMenuConfigBtn").click(function () {
      _0x22ef36.openConfig();
    });
    $(".zfkLeftMenu").hover(() => {
      $(".zfkLeftMenuBtnUl").show();
    }, () => {
      $(".zfkLeftMenuBtnUl").hide();
    });
  },
  "openConfig"() {
    let _0x1dc981 = "\n      <div id=\"zfkConfig\" style=\"padding: 20px;\">\n\n      <form class=\"layui-form layui-form-pane\" lay-filter=\"configForm\">\n    <div class=\"layui-form-item\" pane>\n      <label class=\"layui-form-label\">价格提取</label>\n      <div class=\"layui-input-block\">\n        <input type=\"radio\" name=\"priceTQ\" value=\"1\" title=\"是\">\n        <input type=\"radio\" name=\"priceTQ\" value=\"0\" title=\"否\">\n      </div>\n    </div>\n    <div class=\"layui-form-item\">\n      <div class=\"layui-input-block\">\n        <button class=\"layui-btn\" type=\"button\" lay-filter=\"formDemo\" onclick=\"zfk.saveConfig()\">保存</button>\n      </div>\n    </div>\n  </form>\n    </div>\n    ";
    layer.open({
      "type": "1",
      "title": "设置",
      "content": _0x1dc981,
      "btn": false,
      "area": ["500px", "460px"]
    });
    layui.form.render();
    let _0x32250e = _0x22ef36.getConfig();
    layui.form.val("configForm", _0x32250e);
  },
  "getElByText"(_0x1a882b, _0x100fee, _0x391cc8 = "eq", _0x43f3ad = true) {
    let _0x4550d0 = null;
    return $(_0x1a882b).each((_0x78b3af, _0x187a9b) => {
      if (_0x43f3ad && !$(_0x187a9b).is(":visible")) {
        return true;
      }
      if (_0x391cc8 == "eq" && $(_0x187a9b).text().trim() == _0x100fee) {
        return _0x4550d0 = $(_0x187a9b), false;
      } else {
        if (_0x391cc8 == "startsWith" && $(_0x187a9b).text().trim().startsWith(_0x100fee)) {
          return _0x4550d0 = $(_0x187a9b), false;
        } else {
          if (_0x391cc8 == "endsWith" && $(_0x187a9b).text().trim().endsWith(_0x100fee)) {
            return _0x4550d0 = $(_0x187a9b), false;
          }
        }
      }
    }), _0x4550d0;
  },
  "getElListByText"(_0x582ad6, _0x3412bd, _0x26061e = "eq", _0x55bbc2 = true) {
    let _0x39a4fd = [];
    return $(_0x582ad6).each((_0x4feb30, _0x437133) => {
      if (_0x55bbc2 && !$(_0x582ad6).is(":visible")) {
        return true;
      }
      if (_0x26061e == "eq" && $(_0x437133).text().trim() == _0x3412bd) {
        _0x39a4fd.push($(_0x437133));
      } else {
        if (_0x26061e == "startsWith" && $(_0x437133).text().trim().startsWith(_0x3412bd)) _0x39a4fd.push($(_0x437133));else _0x26061e == "endsWith" && $(_0x437133).text().trim().endsWith(_0x3412bd) && _0x39a4fd.push($(_0x437133));
      }
    }), _0x39a4fd;
  },
  "confirmRun"(_0x4695cf = "脚本：3秒后执行下一步操作", _0xa9c2e1 = 3000) {
    return new Promise((_0x4748e5, _0x2bbe0a) => {
      let _0x3840af = true;
      clearTimeout(_0x22ef36.pageData.confirmRunIndex);
      _0x22ef36.pageData.confirmRunIndex = layer.alert(_0x4695cf, {
        "icon": 3,
        "title": "是否继续？",
        "btn": ["取消执行"],
        "offset": "100px"
      }, function (_0x4cf63f) {
        _0x3840af = false;
        _0x2bbe0a();
        layer.close(_0x22ef36.pageData.confirmRunIndex);
      });
      setTimeout(() => {
        layer.close(_0x22ef36.pageData.confirmRunIndex);
        _0x4748e5(true);
      }, _0xa9c2e1);
    });
  },
  "saveConfig"() {
    var _0x25e049 = layui.form.val("configForm");
    _0x22ef36.setConfig(_0x25e049);
    layer.msg("保存成功");
  },
  "waitOfAbortTemplate"() {
    _0x22ef36.pageData.reject.forEach(_0x11f1c8 => {
      _0x11f1c8.abort();
    });
    _0x22ef36.pageData.reject = [];
    let _0x5bf499 = _0x22ef36.getPromiseWithAbort(_0x22ef36.waitOf(() => {
      let _0x283ea7 = false;
      return $jq("div[class][style]").length > 0 && $jq("div[class][style]").each((_0x3b12d9, _0x3a1ddf) => {
        if ($jq(_0x3a1ddf).attr("class").startsWith("styles_seat_bg_wrap")) {
          _0x283ea7 = $(_0x3a1ddf).next().find("a[role=\"button\"]").length > 0;
          if (_0x283ea7) return false;
        } else {
          if ($jq(_0x3a1ddf).attr("class").startsWith("styles_bg_white")) {
            _0x283ea7 = $(_0x3a1ddf).find("a[role=\"button\"]").length > 0;
            if (_0x283ea7) return false;
          }
        }
      }), _0x283ea7;
    }));
    _0x22ef36.pageData.reject.push(_0x5bf499);
    _0x5bf499.promise.then(_0x27aee1 => {
      _0x22ef36.page_step2Detail_Click();
    });
  },
  "setPageData"() {
    this.pageData.url = location.href;
  },
  "timeoutTemplate"() {
    let _0xc7333d = 10000,
      _0xc114fb = 100,
      _0x101243 = setInterval(() => {
        console.log("disposeContent index");
        _0xc7333d -= _0xc114fb;
        if (_0xc7333d < 0) {
          clearInterval(_0x101243);
          console.log("已过" + _0xc7333d / 1000 + "秒，定时器超时退出");
        }
        $("#resume-page .geek-name").length > 0 && clearInterval(_0x101243);
      }, _0xc114fb);
  },
  "getTimeout"() {
    let _0x42984c = GM_getValue("zfk_jl_config", null),
      _0x20954c = (Math.random() * (Number(_0x42984c.fwpl2) - Number(_0x42984c.fwpl1)) + Number(_0x42984c.fwpl1)) * 1000;
    return console.log("getTimeout", _0x20954c), _0x20954c;
  },
  "setPageData"() {
    _0x22ef36.pageData.url = location.href;
    _0x22ef36.pageData.kcid = _0x22ef36.getUrlParam("courseid");
    !_0x22ef36.pageData.kcid && (_0x22ef36.pageData.kcid = _0x22ef36.getUrlParam("courseId"));
    console.log("==========初始化完成：" + _0x22ef36.pageData.url + "============");
  },
  "changeReactInputValue"(_0x3778c6, _0x52f63b) {
    let _0xe83549 = _0x3778c6.value;
    _0x3778c6.value = _0x52f63b;
    let _0x3e397c = new Event("input", {
      "bubbles": true
    });
    _0x3e397c.simulated = true;
    let _0x255ff9 = _0x3778c6._valueTracker;
    _0x255ff9 && _0x255ff9.setValue(_0xe83549);
    _0x3778c6.dispatchEvent(_0x3e397c);
  },
  "intervalUrlTemp"() {
    let _0x29b840 = "";
    setInterval(() => {
      let _0x2e8317 = location.href;
      if (_0x29b840 == _0x2e8317) {
        return;
      }
      _0x29b840 = _0x2e8317;
      if (_0x2e8317.indexOf("dashboard/merch-picking-hall/merch_promoting") != -1) {} else {
        if (_0x2e8317.indexOf("mpa/pigeonIM") != -1) {}
      }
    }, 500);
  },
  "mouseEventTemp"(_0x47597f, _0x5374b2) {
    let _0x323119 = new MouseEvent("mouseover", {
      "bubbles": true,
      "cancelable": true,
      "clientX": 0,
      "clientY": 0
    });
    $jq(".auxo-dropdown-trigger").eq(1).get(0).dispatchEvent(_0x323119);
  },
  "waitTimeout"(_0x362071) {
    return new Promise((_0x5f5246, _0x30d233) => {
      setTimeout(() => {
        _0x5f5246();
      }, _0x362071);
    });
  },
  "waitOf"(_0x24f1cc, _0x58d04f = 1000, _0x1842d6 = 30) {
    return console.log("%c waitOf", "background:rgb(0,0,0);color:#fff", _0x24f1cc), new Promise((_0x3b6ad3, _0x4ddd0f) => {
      let _0x41607d = _0x1842d6 * 1000;
      try {
        if (_0x24f1cc()) {
          return _0x3b6ad3();
        }
      } catch (_0x32b2dd) {
        console.error(_0x32b2dd);
      }
      let _0xc9b2df = setInterval(() => {
        try {
          if (_0x1842d6 != -1) {
            _0x41607d -= _0x58d04f;
            if (_0x41607d < 0) return clearInterval(_0xc9b2df), _0x4ddd0f();
          }
          if (_0x24f1cc()) {
            return clearInterval(_0xc9b2df), _0x3b6ad3();
          }
        } catch (_0x2ca829) {
          console.error(_0x2ca829);
        }
      }, _0x58d04f);
    });
  },
  "toLogin"() {
    top.location.href = _0x22ef36.url.login + "?yh=" + window.btoa(encodeURI(top.location.href));
  },
  "confirmRun"(_0x1d57da = "脚本：3秒后执行下一步操作", _0x224a08 = 3000) {
    return new Promise((_0x57b1a9, _0x40c308) => {
      let _0x17ae11 = true;
      clearTimeout(_0x22ef36.pageData.confirmRunIndex);
      _0x22ef36.pageData.confirmRunIndex = layer.alert(_0x1d57da, {
        "icon": 3,
        "title": "是否继续？",
        "btn": ["取消执行"],
        "offset": "100px"
      }, function (_0x156659) {
        _0x17ae11 = false;
        _0x40c308();
        layer.close(_0x22ef36.pageData.confirmRunIndex);
      });
      setTimeout(() => {
        layer.close(_0x22ef36.pageData.confirmRunIndex);
        _0x57b1a9(true);
      }, _0x224a08);
    });
  },
  "gmAuthGet"(_0x37317c, _0x40906b, _0x159089 = {
    "showErr": true
  }) {
    return _0x37317c = _0x22ef36.fullUrl(_0x37317c), console.log("gmGet", _0x37317c), new Promise((_0x544e3b, _0x34ca07) => {
      if (_0x37317c.indexOf("?") != -1) for (key in _0x40906b) {
        _0x37317c += "&" + key + "=" + _0x40906b[key];
      } else {
        let _0x3a8fef = true;
        for (key in _0x40906b) {
          _0x37317c += (_0x3a8fef ? "?" : "&") + (key + "=" + _0x40906b[key]);
          _0x3a8fef = false;
        }
      }
      let _0x81c34d = {};
      _0x22ef36.getGMData("token", "") && (_0x81c34d["X-Access-Token"] = _0x22ef36.getGMData("token", ""));
      GM_xmlhttpRequest({
        "method": "get",
        "url": _0x37317c,
        "data": _0x40906b,
        "headers": _0x81c34d,
        "responseType": "json",
        "onload": function (_0x164303) {
          console.log(_0x164303);
          let _0x5bb3e3 = _0x164303.response;
          if (_0x5bb3e3.code != 200) {
            _0x5bb3e3.message.indexOf("Token失效") != -1 ? (layer.alert("登录信息过期，3秒后自动前往登录页面"), setTimeout(() => {
              _0x22ef36.toLogin();
            }, 3000)) : _0x159089.showErr && layer.alert(_0x5bb3e3.message);
            _0x34ca07(_0x5bb3e3);
          } else _0x544e3b(_0x5bb3e3.result);
        },
        "onerror": function (_0x407272) {
          console.log(_0x407272);
          _0x34ca07(_0x407272);
        }
      });
    });
  },
  "getUserName"() {
    return _0x22ef36.getGMData("username", "");
  },
  "toUserNamePage"() {
    alert("脚本启动失败，请按脚本说明文档，请在指定的【启动页面】刷新页面后启动脚本");
    return;
  },
  "gmAuthDownScore"(_0x460649, _0x50b2b1 = true) {
    return new Promise((_0xbf32af, _0x2bb28b) => {
      if (_0x22ef36.isDZKFMode() || _0x30587c) {
        return _0xbf32af(true);
      }
      if (typeof _0x22ef36.pageData.downSuccess !== "undefined" && _0x22ef36.pageData.downSuccess.includes(_0x460649) && _0x22ef36.pageData.downSuccessUserName == _0x22ef36.getUserName()) return _0xbf32af(true);else {
        if (typeof _0x22ef36.pageData.downError !== "undefined" && _0x22ef36.pageData.downError.includes(_0x460649)) return _0x2bb28b(false);
      }
      var _0x1b1720 = _0x22ef36.getUserName();
      if (!_0x1b1720) {
        _0x22ef36.toUserNamePage();
        return;
      }
      _0x22ef36.gmAuthPost("/yh/price/down", {
        "id": _0x460649,
        "key": _0x1b1720
      }, {
        "showErr": _0x50b2b1
      }).then(_0x4f95ba => {
        _0x22ef36.pageData && (!_0x22ef36.pageData.downSuccess && (_0x22ef36.pageData.downSuccess = []), _0x22ef36.pageData.downSuccess.push(_0x460649), _0x22ef36.pageData.downSuccessUserName = _0x1b1720);
        _0xbf32af(true);
      }, _0x3ee56f => {
        !_0x22ef36.pageData.downError && (_0x22ef36.pageData.downError = []);
        _0x22ef36.pageData.downError.push(_0x460649);
        _0x2bb28b(_0x3ee56f);
      });
    });
  },
  "getGMKey"(_0x410196) {
    return _0x410196;
    let _0x19bf49 = localStorage.getItem("ZFK_KEYPREFIX");
    !_0x19bf49 && (_0x19bf49 = _0x22ef36.generateRandomString(10), localStorage.setItem("ZFK_KEYPREFIX", _0x19bf49));
    let _0x4faf3b = ["token"];
    if (_0x4faf3b.includes(_0x410196)) return _0x410196;
    return _0x19bf49 + "_";
  },
  "setGMData"(_0x433c53, _0x3ca8da) {
    return GM_setValue(_0x22ef36.getGMKey(_0x433c53), _0x3ca8da);
  },
  "getUrlParam"(_0x3d2e3b, _0x243d09) {
    if (arguments.length == 1) {
      _0x243d09 = _0x3d2e3b;
      _0x3d2e3b = window.location;
    }
    var _0x166bbd = new RegExp("(^|&)" + _0x243d09 + "=([^&]*)(&|$)"),
      _0x5c825f = _0x3d2e3b.search.substr(1).match(_0x166bbd);
    if (_0x5c825f != null) return unescape(_0x5c825f[2]);
    return "";
  },
  "alertMsg"(_0x2f5560, _0x2ee5a4 = 0) {
    layer.open({
      "type": "1",
      "content": "<div style=\"padding:14px;\">" + _0x2f5560 + "</div>",
      "title": "脚本提示" + (_0x2ee5a4 == 0 ? "" : "（" + (_0x2ee5a4 / 1000).toFixed(2) + "秒后自动关闭}）"),
      "offset": "100px",
      "time": _0x2ee5a4,
      "btn": "关闭"
    });
  },
  "tipsMsg"(_0xf3a256, _0x57cb0f = 3000) {
    layer.msg(_0xf3a256, {
      "offset": "100px",
      "time": _0x57cb0f
    });
  },
  "confirmMsg"(_0x4eb072 = "请确认", _0x176aef = {}) {
    let _0x565ca0 = {
      "title": "脚本提示",
      "btn": ["确定", "关闭"],
      "fun1"(_0x209aba) {
        layer.close(_0x209aba);
      },
      "fun2"() {},
      "fun3"() {}
    };
    Object.assign(_0x565ca0, _0x176aef);
    layer.open({
      "type": "1",
      "content": "<div style=\"padding:14px;\">" + _0x4eb072 + "</div>",
      "title": _0x176aef.title,
      "offset": "100px",
      "btn": _0x565ca0.btn,
      "yes": _0x565ca0.fun1,
      "btn2": _0x565ca0.fun2,
      "btn3": _0x565ca0.fun3
    });
  },
  "tipsLogin"(_0xf5cc47 = "【未登录】脚本需要付费后才可使用。点击[确定]按钮将前往[脚本账号]的注册/登录页面") {
    layer.open({
      "type": "1",
      "content": "<div style=\"padding:14px;\">" + _0xf5cc47 + "</div>",
      "title": "使用脚本前请先登录脚本账号！",
      "offset": "100px",
      "btn": ["去登录", "查看授权说明", "关闭"],
      "yes": function (_0x4676d8) {
        layer.close(_0x4676d8);
        _0x22ef36.pageData.loginTipsIndex = layer.alert("已经为您打开登录页面，请留意浏览器窗口");
        _0x22ef36.toLogin();
      },
      "btn2": function (_0x2be397) {
        return window.open("https://doc.zhanyc.cn/pages/auth/"), false;
      },
      "btn2function"(_0x5c40fe) {
        layer.close(_0x5c40fe);
      }
    });
  },
  async "openLjTips"(_0x1cb07a = true, _0x943510 = false, _0x57556c = 5000) {
    return new Promise((_0x468d5c, _0x2f3042) => {
      let _0x15f806 = layer.open({
          "type": 1,
          "title": "请确认",
          "offset": "100px",
          "content": "\n      <div style=\"padding:10px\">\n      <p>已经为你打开下一门课程，如果没有打开窗口，请检查浏览器地址栏右侧是否有拦截提示，请选择【永久允许】</p>\n      <p style=\"color:red;\">如下图所示：</p>\n      <img src=\"https://js.zhanyc.cn/img/ljts.jpg\"/>\n      </div>\n      "
        }),
        _0x2196a6 = _0x943510 ? location.href : "";
      GM_addValueChangeListener(_0x22ef36.getGMKey("closeLJTS"), function (_0x563d1a, _0x5019e5, _0x18adea, _0x36f56f) {
        return layer.close(_0x15f806), _0x1cb07a && _0x22ef36.tipsAndClose(_0x2196a6, _0x57556c), _0x468d5c();
      });
    });
  },
  "tipsAndClose"(_0xc739fd, _0x452f2c = 5000) {
    _0x22ef36.confirmRun((_0x452f2c / 1000).toFixed(2) + "秒后关闭当前页面", _0x452f2c).then(_0x4c977b => {
      if (!_0xc739fd || location.href == _0xc739fd) window.close();
    });
  },
  "closeWaitConfrimWin"() {
    _0x22ef36.setGMData("closeLJTS", _0x22ef36.now());
  },
  "getQuestionType"(_0x3a9cbd) {
    var _0xfa3df7 = "";
    switch (_0x3a9cbd) {
      case "[单选题]":
        _0xfa3df7 = "1";
        break;
      case "[判断题]":
        _0xfa3df7 = "3";
        break;
    }
    return _0xfa3df7;
  },
  "checkLogin"() {
    if (_0x30587c) {
      _0x22ef36.begin();
      return;
    }
    if (location.href.indexOf("m.zhanyc.cn") != -1) {
      return;
    }
    _0x22ef36.gmAuthPost("/yh/price/check").then(_0x168c7c => {
      _0x168c7c && _0x22ef36.begin();
    });
  },
  "gmAuthPost"(_0x468b36, _0x1f3cbf = {}, _0x333631 = {
    "showErr": true
  }) {
    _0x468b36 = _0x22ef36.fullUrl(_0x468b36);
    if (_0x48445f) console.log("gmPost", _0x468b36);
    let _0x36f708 = {
      "Content-Type": "application/json"
    };
    return _0x22ef36.getGMData("token", "") && (_0x36f708["X-Access-Token"] = this.getGMData("token", "")), new Promise((_0x328df5, _0x37c3b7) => {
      GM_xmlhttpRequest({
        "method": "post",
        "url": _0x468b36,
        "data": JSON.stringify(_0x1f3cbf),
        "headers": _0x36f708,
        "responseType": "json",
        "onload": function (_0x58f2ba) {
          if (_0x48445f) console.log(_0x58f2ba);
          let _0x173d81 = _0x58f2ba.response;
          try {
            if (typeof _0x173d81 == "string") _0x173d81 = JSON.parse(_0x173d81);
          } finally {}
          if (_0x173d81.message.indexOf("Token失效") != -1) {
            _0x22ef36.tipsLogin();
            return;
          }
          if (_0x173d81.code != 200) {
            if (_0x333631.showErr) {
              if (_0x173d81.message.startsWith("脚本需收费授权使用")) {
                _0x22ef36.initBuyAuth();
                _0x22ef36.pageData.noAuthIndex = layer.open({
                  "type": "1",
                  "content": "<div style=\"padding:14px;\">" + _0x173d81.message + "</div>",
                  "icon": 3,
                  "title": "当前学生账号未授权",
                  "offset": "100px",
                  "btn": ["去购买授权", "查看授权信息", "查看帮助"],
                  "yes": function (_0x3db92e) {
                    _0x22ef36.buyAuthFun();
                  },
                  "btn2": function (_0x1b9b73) {
                    _0x22ef36.myInfo();
                  },
                  "btn3": function (_0x443c4c) {
                    return top.open("http://doc.zhanyc.cn/pages/auth/"), false;
                  }
                });
              } else layer.alert(_0x173d81.message, {
                "offset": "100px"
              }, function () {
                _0x22ef36.myInfo();
              });
            }
            _0x37c3b7(_0x173d81);
          } else _0x328df5(_0x173d81.result);
        },
        "onerror": function (_0x2f4fe1) {
          if (_0x48445f) console.log(_0x2f4fe1);
          _0x37c3b7(_0x2f4fe1);
        }
      });
    });
  },
  "hold"() {
    setInterval(() => {
      _0x22ef36.gmAuthPost("/yh/price/hold").then(_0xd94868 => {});
    }, 10 * 60 * 1000);
  },
  "getConfig"() {
    let _0xd12ed8 = GM_getValue("config", {}),
      _0x5945b9 = {};
    return _0xd12ed8 = Object.assign(_0x5945b9, _0xd12ed8), _0xd12ed8;
  },
  "setConfig"(_0x2d115e, _0x23dacf = "") {
    console.log("setConfig" + _0x23dacf, JSON.stringify(_0x2d115e));
    GM_setValue("config", _0x2d115e);
  },
  "fullUrl"(_0x765a34, _0x26a3e = "") {
    if (!_0x26a3e) _0x26a3e = _0x22ef36.url.base;
    if (!_0x765a34.startsWith("http")) return _0x26a3e + _0x765a34;
    return _0x765a34;
  },
  "getPromiseWithAbort"(_0x50ac4e) {
    let _0xa15d4d = {},
      _0x44bd24 = new Promise(function (_0x56dd69, _0x34a31e) {
        _0xa15d4d.abort = _0x34a31e;
      });
    return _0xa15d4d.promise = Promise.race([_0x50ac4e, _0x44bd24]), _0xa15d4d;
  },
  "addValueChangeTempate"() {
    GM_removeValueChangeListener(_0x22ef36.pageData.valueChangeIndex.list);
    _0x22ef36.pageData.valueChangeIndex.list = GM_addValueChangeListener("zfk_mark_brand", function (_0x3c939d, _0x58e0ce, _0x4434bf, _0x347140) {
      console.log("zfk_mark_brand", arguments);
      if (_0x4434bf == "") {
        return;
      }
    });
  },
  "matchReg"(_0x1b805b, _0x53c605) {},
  "matchUrl"(_0x494766, _0x369b1e = "like", _0x27c11e = location.href) {
    let _0x42c915 = false;
    switch (_0x369b1e) {
      case "eq":
        _0x42c915 = _0x494766 == _0x27c11e;
        break;
      case "like":
        _0x42c915 = _0x27c11e.indexOf(_0x494766) != -1;
        break;
      case "left":
        _0x42c915 = _0x27c11e.startsWith(_0x494766);
        break;
      case "right":
        _0x42c915 = _0x27c11e.endsWith(_0x494766);
        break;
    }
    return _0x42c915;
  },
  "page_yhwelcome"() {
    console.log("%c page_yhwelcome", "background:rgb(255,0,0);color:#fff");
    let _0x299304 = setInterval(() => {
      if (location.href.search("yhwelcome") != -1) {
        clearInterval(_0x299304);
        var _0x41d531 = JSON.parse(localStorage.getItem("pro__Access-Token")).value;
        _0x22ef36.setGMData("token", _0x41d531);
        _0x22ef36.setGMData("login", {
          "login": true,
          "time": _0x22ef36.now()
        });
      }
    }, 500);
  },
  "page_yhwelcome2"() {
    console.log("%c page_yhwelcome", "background:rgb(255,0,0);color:#fff");
    var _0x251da2 = sessionStorage.getItem("token");
    _0x22ef36.setGMData("token", _0x251da2);
    _0x22ef36.setGMData("login", {
      "login": true,
      "time": _0x22ef36.now()
    });
  },
  "gmGet"(_0x3c6a5d, _0x542907) {
    console.log("gmGet", _0x3c6a5d);
    if (_0x3c6a5d.indexOf("?") != -1) {
      for (key in _0x542907) {
        _0x3c6a5d += "&" + key + "=" + _0x542907[key];
      }
    } else {
      let _0x5af843 = true;
      for (key in _0x542907) {
        _0x3c6a5d += (_0x5af843 ? "?" : "&") + (key + "=" + _0x542907[key]);
        _0x5af843 = false;
      }
    }
    return new Promise((_0x1e68f5, _0x4a42a8) => {
      GM_xmlhttpRequest({
        "method": "get",
        "url": _0x3c6a5d,
        "data": _0x542907,
        "headers": {},
        "responseType": "json",
        "onload": function (_0x2379f7) {
          let _0x42cc84 = _0x2379f7.response;
          console.log(_0x42cc84);
          _0x1e68f5(_0x42cc84);
        },
        "onerror": function (_0x1bfbbc) {
          console.log(_0x1bfbbc);
          _0x4a42a8(_0x1bfbbc);
        }
      });
    });
  },
  "parseQueryString"(_0x135553) {
    _0x135553 = !_0x135553 ? window.location.href : _0x135553;
    if (_0x135553.indexOf("?") === -1) return {};
    let _0x25d389 = _0x135553[0] === "?" ? _0x135553.substr(1) : _0x135553.substring(_0x135553.lastIndexOf("?") + 1);
    if (_0x25d389 === "") return {};
    _0x25d389 = _0x25d389.split("&");
    let _0x4e7c0e = {};
    for (let _0x2dbf62 = 0; _0x2dbf62 < _0x25d389.length; _0x2dbf62++) {
      let _0x5f2bb7 = _0x25d389[_0x2dbf62].split("=");
      _0x4e7c0e[decodeURIComponent(_0x5f2bb7[0])] = decodeURIComponent(_0x5f2bb7[1] || "");
    }
    return _0x4e7c0e;
  },
  "gmPost"(_0x43f5d9, _0x551b7a) {
    return console.log("gmPost", _0x43f5d9), _0x43f5d9 = _0x22ef36.fullUrl(_0x43f5d9), new Promise((_0x27f907, _0x12aaa3) => {
      GM_xmlhttpRequest({
        "method": "post",
        "url": _0x43f5d9,
        "data": JSON.stringify(_0x551b7a),
        "headers": {
          "Content-Type": "application/json"
        },
        "responseType": "json",
        "onload": function (_0x4f025d) {
          let _0x478bd9 = _0x4f025d.response;
          console.log(_0x478bd9);
          _0x27f907(_0x478bd9);
        },
        "onerror": function (_0x29c769) {
          console.log(_0x29c769);
          _0x12aaa3(_0x29c769);
        }
      });
    });
  },
  "triggerInputEvent"() {
    let _0xc83588 = document.createEvent("HTMLEvents");
    _0xc83588.initEvent("input", true, true);
    $jq("#TeamName").val("团队1233123").get(0).dispatchEvent(_0xc83588);
  },
  "addJS"(_0xec241c) {
    let _0x1b2f1b = document.createElement("script");
    _0x1b2f1b.setAttribute("type", "text/javascript");
    _0x1b2f1b.setAttribute("src", _0xec241c);
    document.body.insertBefore(_0x1b2f1b, document.body.lastChild);
  },
  "AddCss"(_0x448b0a) {
    var _0x3f2c02 = document.getElementsByTagName("head")[0],
      _0x278c12 = document.createElement("link");
    _0x278c12.rel = "stylesheet";
    _0x278c12.href = _0x448b0a;
    _0x3f2c02.appendChild(_0x278c12);
  },
  "logResult"() {
    console.log(GM_getValue("zfk_jl_result", []));
  },
  "getGMData"(_0x31adb5, _0x54dfb0) {
    return GM_getValue(_0x31adb5, _0x54dfb0);
  },
  "setGMData"(_0x2f3501, _0x432c64) {
    return GM_setValue(_0x2f3501, _0x432c64);
  },
  "delGMData"(_0x24f4a2, _0x2f960f) {
    return GM_deleteValue(_0x24f4a2);
  },
  "setPageData"() {
    this.pageData.url = location.href;
  },
  "closeConfig"() {
    layer.closeAll();
  },
  "HTMLEncode"(_0x2d06c2) {
    var _0x25e6c8 = document.createElement("div");
    _0x25e6c8.textContent != null ? _0x25e6c8.textContent = _0x2d06c2 : _0x25e6c8.innerText = _0x2d06c2;
    var _0xb27751 = _0x25e6c8.innerHTML;
    return _0x25e6c8 = null, _0xb27751;
  },
  "HTMLDecode"(_0x418d65) {
    if (!_0x418d65) return "";
    if (_0x418d65.length > 2 && _0x418d65.substr(0, 1) == "<" && _0x418d65.substr(_0x418d65.length - 1, 1) == ">") {
      return _0x418d65;
    } else {
      var _0x2067be = document.createElement("div");
      _0x2067be.innerHTML = _0x418d65;
      var _0x34ed10 = _0x2067be.innerText || _0x2067be.textContent;
      _0x2067be = null;
      return _0x34ed10;
    }
  },
  "isRichText"(_0x38a7c1) {
    if (!_0x38a7c1) return false;
    var _0x321025 = document.createElement("div");
    _0x321025.innerHTML = _0x38a7c1;
    var _0x2e117c = _0x321025.innerText.length != _0x38a7c1.length;
    return _0x321025 = null, _0x2e117c;
  },
  "getSimpleText"(_0x1b4533) {
    if (!_0x1b4533) return "";
    var _0x5b0239 = this.HTMLDecode(_0x1b4533),
      _0x5afeed = document.createElement("div");
    _0x5afeed.innerHTML = _0x5b0239;
    var _0x12cfa5 = _0x5afeed.innerText || _0x5afeed.textContent;
    return _0x5afeed = null, _0x12cfa5;
  },
  "now"() {
    return new Date().getTime();
  },
  "downloadTxt"(_0x5ae0f5, _0x3fd46e) {
    var _0x3e8bfc = document.createElement("a");
    _0x3e8bfc.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(_0x3fd46e));
    _0x3e8bfc.setAttribute("download", _0x5ae0f5);
    _0x3e8bfc.style.display = "none";
    document.body.appendChild(_0x3e8bfc);
    _0x3e8bfc.click();
    document.body.removeChild(_0x3e8bfc);
  },
  "dateFormat"(_0x48f359 = new Date(), _0x11e37a = "yyyy-MM-dd HH:mm") {
    let _0x485a30;
    if (typeof _0x48f359 === "number") _0x48f359 = new Date(_0x48f359);
    const _0x5ba45b = {
      "y+": _0x48f359.getFullYear().toString(),
      "M+": (_0x48f359.getMonth() + 1).toString(),
      "d+": _0x48f359.getDate().toString(),
      "H+": _0x48f359.getHours().toString(),
      "m+": _0x48f359.getMinutes().toString(),
      "s+": _0x48f359.getSeconds().toString()
    };
    for (let _0xf5f70 in _0x5ba45b) {
      _0x485a30 = new RegExp("(" + _0xf5f70 + ")").exec(_0x11e37a);
      _0x485a30 && (_0x11e37a = _0x11e37a.replace(_0x485a30[1], _0x485a30[1].length == 1 ? _0x5ba45b[_0xf5f70] : _0x5ba45b[_0xf5f70].padStart(_0x485a30[1].length, "0")));
    }
    return _0x11e37a;
  }
});
_0x22ef36.setGMData("version", _0x22ef36.setting.version.version);
_0x22ef36.init();
unsafeWindow.zfk = _0x22ef36;