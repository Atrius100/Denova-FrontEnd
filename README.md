# Denova.Tests — Controller Unit Tests

## Setup

1. Restore & run:
   ```bash
   dotnet test --logger "console;verbosity=normal"
   ```

## NuGet packages required

| Package | Purpose |
|---|---|
| `xunit` | Test framework |
| `Moq` | Mocking dependencies |
| `Microsoft.NET.Test.Sdk` | Test runner host |
| `xunit.runner.visualstudio` | VS / Rider integration |
| `Microsoft.AspNetCore.Mvc.Testing` | `ControllerContext` / `DefaultHttpContext` |

---

## Coverage summary

### `AuthControllerTests` (6 tests)
| Test | Scenario |
|---|---|
| Register_ValidDto_ReturnsOk | Happy path — service returns success |
| Register_ServiceFails_ReturnsBadRequest | Email already registered |
| VerifyEmail_ValidCode_ReturnsOk | Correct OTP |
| VerifyEmail_WrongCode_ReturnsBadRequest | Invalid / expired OTP |
| Login_ValidCredentials_ReturnsOkWithToken | JWT returned |
| Login_InvalidCredentials_ReturnsUnauthorized | Wrong password |

### `AdminUserControllerTests` (2 tests)
| Test | Scenario |
|---|---|
| CreateReceptionist_ValidDto_ReturnsOk | New receptionist created |
| CreateReceptionist_EmailDuplicate_ReturnsBadRequest | Duplicate email |

### `CaseCategoriesControllerTests` (4 tests)
| Test | Scenario |
|---|---|
| GetAll_WhenCategoriesExist_ReturnsOkWithList | List returned |
| GetAll_ServiceFails_ReturnsBadRequest | DB error |
| GetById_ExistingId_ReturnsOk | Category found |
| GetById_NonExistingId_ReturnsNotFound | 404 |

### `UniversitiesControllerTests` (4 tests)
| Test | Scenario |
|---|---|
| GetAll_ReturnsOkWithUniversities | All active |
| GetAll_ServiceFails_ReturnsBadRequest | DB error |
| Create_ValidDto_ReturnsOk | Created |
| Create_DuplicateId_ReturnsBadRequest | Duplicate ID |

### `CaseRequestsControllerTests` (10 tests)
| Test | Scenario |
|---|---|
| Submit_ValidRequest_Returns201 | Case request submitted |
| Submit_ProfileNotFound_ReturnsUnauthorized | No student profile |
| Submit_AlreadyRequested_ReturnsBadRequest | Duplicate request |
| Withdraw_OwnRequest_ReturnsNoContent | Successful withdrawal |
| Withdraw_RequestNotOwnedByStudent_ReturnsBadRequest | Ownership mismatch |
| GetMyRequests_StudentHasRequests_ReturnsOk | List returned |
| GetPending_AsReceptionist_ReturnsOk | Pending list for admin |
| GetByCase_ValidCaseId_ReturnsOk | Requests for a case |
| Review_Approve_ReturnsOk | Approval flow |
| Review_Reject_ReturnsOk | Rejection with reason |
| Review_RequestNotFound_ReturnsBadRequest | Missing request |

### `MedicalCasesControllerTests` (18 tests)
| Test | Scenario |
|---|---|
| GetPaged_AsReceptionist_AutoScopesUniversity_ReturnsOk | Auto-scoping |
| GetPaged_ReceptionistWithoutLocation_ReturnsUnauthorized | Missing Location |
| GetPatientRequests_AsReceptionist_ReturnsOk | Patient submissions tab |
| ApproveSubmission_ValidCase_ReturnsOk | Pending → Available |
| ApproveSubmission_CaseNotFound_ReturnsBadRequest | Invalid ID |
| RejectSubmission_ValidCase_ReturnsOk | → Cancelled |
| GetPatientProfiles_AsReceptionist_ReturnsOk | Profiles tab |
| GetById_ExistingCase_ReturnsOk | Found |
| GetById_NotFound_ReturnsNotFound | 404 |
| GetAvailableForStudent_ActiveStudent_ReturnsOk | Student browse |
| GetAvailableForStudent_ProfileNotFound_ReturnsUnauthorized | No profile |
| GetMyCases_StudentWithCases_ReturnsOk | My cases tab |
| CreateByAdmin_ValidDto_Returns201 | Admin creates case |
| CreateByAdmin_ServiceFails_ReturnsBadRequest | Bad category |
| CreateByStudent_ValidDto_Returns201 | Student creates case |
| CreateByStudent_QuotaExceeded_ReturnsBadRequest | Quota check |
| CreateByPatient_ValidDto_ReturnsOkWithMessage | Anonymous patient |
| CreateByPatient_ServiceFails_ReturnsBadRequest | Invalid data |
| Update_ValidDto_ReturnsOk | Fields updated |
| Update_CaseNotFound_ReturnsBadRequest | 400 |
| UpdateStatus_ValidTransitions_ReturnsOk (x3) | InProgress/Completed/Cancelled |
| Delete_ExistingCase_ReturnsNoContent | 204 |
| Delete_CaseNotFound_ReturnsBadRequest | 400 |

### `StudentsControllerTests` (8 tests)
| Test | Scenario |
|---|---|
| GetMyProfile_ProfileExists_ReturnsOkWithDto | Full DTO returned |
| GetMyProfile_UserNotFound_ReturnsNotFound | Identity user missing |
| GetMyProfile_ProfileNotFound_ReturnsNotFound | Student profile missing |
| GetMyProfile_AgeCalculated_IsCorrect | Age calculation |
| UpdateMyProfile_ValidDto_ReturnsOkWithMessage | No phone change |
| UpdateMyProfile_PhoneChanged_CallsSetPhoneNumber | Phone update |
| UpdateMyProfile_PhoneUpdateFails_ReturnsBadRequest | Identity error |
| UpdateMyProfile_UserNotFound_ReturnsNotFound | User missing |

